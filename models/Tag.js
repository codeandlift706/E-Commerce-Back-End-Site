// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize'); //This is so that we can perform CRUD operations, has access because of the class Model

// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Product model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// set up fields and rules for Product model
Tag.init(
  {
    // define columns
    tag_name: {
      type: DataTypes.STRING
    },
    tag_id: {
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
    modelName: 'tag',
  }
);

module.exports = Tag;
