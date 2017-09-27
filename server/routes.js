const express = require('express');
const path = require('path');
const controller = require('./controller.js');

module.exports = (app) => {
  // PROFILE ROUTES
  app.use('/data/:id', controller.checkAuth, express.static(path.join(__dirname, '../public')));
  app.use('/profile/:id', controller.checkAuth, express.static(path.join(__dirname, '../public')));
  app.use('/profile/', controller.checkAuth, express.static(path.join(__dirname, '../public')));


  // AUTH ROUTES
  app.use('/login', express.static(path.join(__dirname, '/public')));
  app.use('/signup', express.static(path.join(__dirname, '/public')));
  app.get('/logout', controller.handleLogout);
  app.post('/login', controller.handleLogin);
  app.post('/signupCarrier', controller.handleSignupCarrier);
  app.post('/signupShipper', controller.handleSignupShipper);
  app.post('/addContract', controller.addContract);
  app.get('/getContracts', controller.getContracts);
  app.get('/checkSession', controller.checkSession, (req, res) => {
    res.status(200).json({
      status: 'Login successful!',
    });
  });

  // API ROUTES
  app.get('/api/profile/:id', controller.checkAuth, controller.getProfileCarrier);
};


// const app = require('../index.js');
// // const http = require('http');
// const Mailgun = require('mailgun-js');
// // eventually move this to private
// const apiKey = 'MAILGUN-API-KEY';
// const domain = YOUR-DOMAIN.com';
// const fromWho = your@email.com';
