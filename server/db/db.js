const Sequelize = require('sequelize');
const config = require('../serverConfig.js');
 //local
 const db = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.host,
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
        ssl: true
    },
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