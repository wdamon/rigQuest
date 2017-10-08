const Sequelize = require('sequelize');
const db = require('../db.js');
const bcrypt = require('bcrypt-nodejs');
const Session = require ('./sessions.js');

const shipper = db.define('shipper', {
  image: {
    type: Sequelize.STRING,
  },
  userName: {
    type:Sequelize.STRING, allowNull:false,
  },
  firstName: {
    type: Sequelize.STRING, allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING, allowNull: false,
  },
  fullName: {
    type: Sequelize.STRING, allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  organization: {
    type: Sequelize.STRING,
  },
  street: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  postal: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.STRING, // if logged in or on a mission
  },
  OS: {
    type: Sequelize.STRING,
  },
  geometry: {
    type: Sequelize.GEOMETRY,
  },
  route: {
    type: Sequelize.STRING(1000),
  },
});
shipper.generateHash = password => bcrypt.hashSync(
  password,
  bcrypt.genSaltSync(8),
  null);
shipper.validPassword = password => bcrypt.compareSync(
  password,
  this.password);

Session.belongsTo(shipper);





module.exports = shipper;