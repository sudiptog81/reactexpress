const Sequelize = require("sequelize");
const db = require("../config/database");

const Customer = db.define(
  "customer",
  {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    avatar: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

module.exports = Customer;
