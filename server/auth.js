const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('./controller');

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

router.post('/register', controller.register);