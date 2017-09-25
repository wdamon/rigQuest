const Carriers = require('./models/carriers.js');
const Sessions = require('./models/sessions.js');
const db = require('./db');

// Carriers.sync({force: true}).then(() => {
//   return Carriers.create({
//     image: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/08/2816096-thumbnail_1992608045960713568.jpg/revision/latest?cb=20170828123523",
//     userName: "The Rick Sanchez",
//     firstName: "Rick Sanchez",
//     lastName: "Rick",
//     fullName: "Sanchez",
//     email: "Rick@AOL.com",
//     password: "Aa",
//     phone: "123456789",
//     organization: "Council of Ricks",
//     truckType: "Interdimensional Dodge Caravan",
//     status: "On Route",
//   })
// })

// db.sync()