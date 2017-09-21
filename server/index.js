const express = require('express');
const app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
const config = require('./config.js');
const Carriers = require('./db/models/carriers.js')

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ userName: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: 'Invalid username or password.' })
);

app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port}!`);
})