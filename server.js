const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

// Import models to sync table with database
const Category = require('./models/Category');
const Product = require('./models/Product');
const ProductTag = require('./models/ProductTag');
const Tag = require('./models/Tag');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
//this finds any models and syncs them to our database THEN...
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})});
