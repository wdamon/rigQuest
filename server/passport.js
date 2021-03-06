const LocalStrategy = require('passport-local').Strategy;
const Carrier = require('./db/models/carriers.js');
const Shipper = require('./db/models/shippers.js');
const Contracts = require('./db/models/contracts.js');
const bcrypt = require('bcrypt-nodejs');

// expose this function to our app using module.exports
module.exports = (passport) => {
  passport.serializeUser((user, done) => done(null, user.id));

  // used to deserialize the user
  passport.deserializeUser((id, done) => { //if Carrier
    Carrier.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch(err => done(err, false));
  });


  // LOCAL SIGNUP ==========================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  // SIGNUP logic
  passport.use('local-signup-Carrier', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    process.nextTick(() => {
      Carrier.findOne({ where: { email: email } })
        .then((user) => {
          if (user) {
            return done(null, false, { message: 'User exsits' });
          }
          Carrier.create({
            image: req.body.image,
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fullName: `${req.body.firstName} ${req.body.lastName}`,
            email: email,
            password: Carrier.generateHash(password),
            phone: req.body.phone,
            organization: req.body.org,
            truckType: req.body.truckType
          })
            .then((newUser) => {
              done(null, newUser);
            })
            .catch(err => done(err, false));
          return 'NextTick, findOne ran';
        });
    });
  }));

 passport.use('local-signup-Shipper', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    process.nextTick(() => {
      Shipper.findOne({ where: { email: email } })
        .then((user) => {
          if (user) {
            return done(null, false, { message: 'User exsits' });
          }
          Shipper.create({
            image: req.body.image,
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fullName: `${req.body.firstName} ${req.body.lastName}`,
            email: email,
            password: Shipper.generateHash(password),
            phone: req.body.phone,
            organization: req.body.org,
            truckType: req.body.truckType
          })
            .then((newUser) => {
              done(null, newUser);
            })
            .catch(err => done(err, false));
          return 'NextTick, findOne ran';
        });
    });
  }));
  // LOGIN logic
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    Carrier.findOne({ where: { email:email } })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch(err => done(err, false));
  }));
};
