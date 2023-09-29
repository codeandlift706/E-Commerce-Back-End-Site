// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize'); //This is so that we can perform CRUD operations, has access because of the class Model

// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// set up fields and rules for Product model
ProductTag.init(
  {
    // define columns
    product_id: {
      type: DataTypes.INTEGER
    },
    tag_id: {
      type: DataTypes.INTEGER
    },
  },
  {
    // Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
