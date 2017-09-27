// put 2 and 2 together
const passport = require('passport');
const request = require('request');
const Session = require('./db/models/sessions.js');
const Carrier = require('./db/models/carriers.js');
const Contract = require('./db/models/contracts.js');

const sid = process.env.sid;

exports.publicRoutes = [
  '/',
  '/home',
  '/profile/',
  '/profile/:id',
  '/login',
  '/signup',
];


exports.checkSession = (req, res, next) => {
  if (req.sessionID) {
    Session.findOne({
      where: { sid: req.sessionID },
      include: [{ model: Carrier,}],
    })
      .then((sessionSave) => {
        if (sessionSave) {
          if (sessionSave.carrierId) {
            return res.send({ success: true, message: 'authentication succeeded', profile: sessionSave.Carrier });
          }
          return res.send({ success: false, message: 'session exists but userId is not assigned', profile: null });
        }
        return res.send({ success: false, message: 'no session found', profile: null });
      });
  } else {
    next();
  }
};

exports.handleLogin = (req, res, next) => {
  //set a variable here that will say if it is a carrier or shipper then have all the rest of hte logic the same.
  passport.authenticate('local-login', (err, user) => {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      console.log("user is " + user + " and it's not there");
      return res.status(400).send({ success: false, message: 'authentication failed' });
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      req.session.userId = user.id;
      return res.send({ success: true, message: 'authentication succeeded', profile: user });
    });
  })(req, res, next);
};

exports.handleSignupCarrier = (req, res, next) => {
  passport.authenticate('local-signup-Carrier', (err, user) => {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success: false, message: 'authentication failed' });
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      req.session.userId = user.id;
      return res.send({
        success: true,
        message: 'authentication succeeded',
        profile: user
      });
    });
  })(req, res, next);
};

exports.handleSignupShipper = (req, res, next) => {
  passport.authenticate('local-signup-Shipper', (err, user) => {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success: false, message: 'authentication failed' });
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      req.session.userId = user.id;
      return res.send({
        success: true,
        message: 'authentication succeeded',
        profile: user
      });
    });
  })(req, res, next);
};



exports.handleLogout = (req, res) => {
  Session.destroy({ where: { sid: req.sessionID } });
  res.redirect('/');
};
exports.checkAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.redirect('/');
  }
};
exports.updateCarrier = (req, res) => {
  Carrier.update({
    email: req.body.email,
    username: req.body.username,
    fullname: req.body.fullname,
    phone: req.body.phone,
    organization: req.body.org,
    truckType: req.body.truckType
  }, {where : {id: req.body.userId} })
  .then((User) => res.send(User))
};

exports.getProfileCarrier = (req, res) => {
  Carrier.findById(req.params.id)
    .then((profile) => {
      if (!profile) {
        res.status(400).send('Could not find user profile');
      } else {
        res.status(200).send(profile);
      }
      return 'getProfile promise resolved';
    });
};

exports.addContract = (req, res) => {
  Contract.create({
    sAddress: req.body.sAddress,
    sCity: req.body.sCity,
    sState: req.body.sState,
    sPostal: req.body.sPostal,
    eAddress: req.body.eAddress,
    eCity: req.body.eCity,
    eState: req.body.eState,
    ePostal: req.body.ePostal,
    amount: req.body.amount,
    shipper_id: req.body.shipper_id,
  })
  .then(() => res.status(200).send())
  .catch((err) => {
    res.status(500).send('error adding new item')
  });
}

exports.getContracts = (req, res) => {
  Contract.findAll({}).then((contracts) => res.status(200).send(contracts))
}
