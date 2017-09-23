const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const config = require('./config.js');
const Carriers = require('./db/models/carriers.js')


passport.use(new LocalStrategy(
  function(username, password, done) {
    Carriers.findOne({ where: {userName: username }})
    .then((user) => {
      return done(null, user);
    })
    .catch((err) => {
      return done(null, false, {message: "some error logging in"});
    })
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Carrier.findOne({where: {id:id}})
    .then((user) => {
      done(null, user)
    })
    .catch((user) => {
      return cb(err)
    })  
});


app.use(session({ secret: "Keyboard Cat", resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());


app.post('/login', function(req,res) {
  console.log("Request Body ", req.body);
  passport.authenticate('local', { failureRedirect: '/login'}),
  function(req, res) {
    res.redirect('/');
  }
});

app.get('/test', function(req, res) {
  Carriers.findOne({where: {userName: "The Rick Sanchez"}}).then(users=> {
    res.send(users);
  })
})

app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port}!`);
})