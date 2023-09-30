// import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

//IF YOU DELETE A CATEGORY, THE PRODUCT DOESN'T EXIST
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

//IF YOU DELETE A PRODUCT, THE CATEGORY STILL EXISTS
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

//IF YOU DELETE A PRODUCT, THE TAG NAME STILL EXISTS
//TAGS CAN HAVE MORE THAN 1 TYPE OF PRODUCT -- THERE CAN BE BLUE PLAIN T SHIRT OR RUNNING SNEAKERS
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  onDelete: 'SET NULL',
  through: {
    model: ProductTag,
    unique: false
  }
});

//IF YOU DELETE A TAG, THE PRODUCT STILL EXISTS
//PRODUCTS CAN HAVE MORE THAN 1 TYPE OF TAG -- PLAIN T SHIRT CAN BE BLUE OR RED
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  onDelete: 'SET NULL',
  through: {
    model: ProductTag,
    unique: false
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
