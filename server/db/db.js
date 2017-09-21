const Sequelize = require('sequelize');
const config = require('../config.js');

const db = new Sequelize('rigquest', config.dbUser, config.dbPassword, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

db
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log('Unable to connect to the database:', err));

module.exports = db;