const Sequelize = require('sequelize');
const config = require('../config.js');
 //local
// const db = new Sequelize('rigquest', config.dbUser, config.dbPassword, {
//   host: config.host,
//   dialect: 'postgres',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
// });

//Remote
const db = new Sequelize('postgres://bxoyeweefbjlgs:29125e13d206fa02061ccf81adb7c96f094f4988343777c580c9bf8623d0f9fe@ec2-184-72-248-8.compute-1.amazonaws.com:5432/dcurki73k3tkhc')

db
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log('Unable to connect to the database:', err));

module.exports = db;