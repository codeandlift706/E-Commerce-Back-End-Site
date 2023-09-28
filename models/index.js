// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {

  through: {
    model: Product,
    unique: false
  }
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  through: {
    model: Product,
    unique: false
  }
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: '',
  onDelete: ''
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: '',
  onDelete: ''
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
