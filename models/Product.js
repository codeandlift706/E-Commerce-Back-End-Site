// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize'); //This is so that we can perform CRUD operations, has access because of the class Model

// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    stock: {
      type: DataTypes.INTEGER
    },
    category_id: {
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'productTag',
        key: 'id',
      },
    },
  },
  {
    // Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
