const Sequelize = require('sequelize');
const db = require('../db.js');
const Shipper = require('./shippers.js');
const Carrier = require('./carriers.js');

const contract = db.define('contract', {
  sAddress: {
    type: Sequelize.STRING,
  },
  sCity: {
    type: Sequelize.STRING,
  },
  sState: {
    type: Sequelize.STRING,
  },
  sPostal: {
    type: Sequelize.STRING,
  },
  startGeometry: {
    type: Sequelize.GEOMETRY,
  },
  route: {
    type: Sequelize.STRING(1000),
  },
  endGeometry: {
    type: Sequelize.GEOMETRY,
  },
  eAddress: {
    type: Sequelize.STRING,
  },
  eCity: {
    type: Sequelize.STRING,
  },
  eState: {
    type: Sequelize.STRING,
  },
  ePostal: {
    type: Sequelize.STRING,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
});
contract.belongsTo(Shipper, {
  as: 'borrower',
  foreignKey: 'shipper_id',
  constraints: false,
});
contract.belongsTo(Carrier, { as: 'carrier', foreignKey: 'carrier_id', constraints: false });
Shipper.hasMany(contract, { foreignKey: 'shipper_id', constraints: false });
Carrier.hasMany(contract, { foreignKey: 'carrier_id', constraints: false });


module.exports = contract;