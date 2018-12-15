const express = require("express");
const path = require("path");
const db = require("./config/database");
const Customer = require("./models/Customer");
const Sequelize = require("sequelize");
const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/customers", (req, res) => {
  Customer.findAll()
    .then(customer => {
      res.json(customer);
    })
    .catch(err => console.log(`Error: ${err}`));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
