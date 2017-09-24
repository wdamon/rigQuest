const LocalStrategy = require('passport-local').Strategy;
const Carrier = require('./db/models/carriers.js');
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
    usernameField: 'userName',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, userName, password, done) => {
    process.nextTick(() => {
      Carrier.findOne({ where: { userName: userName } })
        .then((user) => {
          if (user) {
            return done(null, false, { message: 'User exsits' });
          }
          Carrier.create({
            image: req.body.image,
            userName: userName,
            firstName: req.body.fName,
            lastName: req.body.lName,
            fullName: `${req.body.firstName} ${req.body.lastName}`,
            email: req.body.email,
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


  // LOGIN logic
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    Carrier.findOne({ where: { userName:email } })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        // if (!bcrypt.compareSync(password, user.password)) {
        //   return done(null, false);
        // }
        return done(null, user);
      })
      .catch(err => done(err, false));
  }));
};
