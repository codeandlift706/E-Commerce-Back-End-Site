// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


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

//MANY TO MANY 

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
  //as: '' when you query the Product Table, what the foreign key product_id to Tag will be referred as
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
  //as: '' When you query the Tag Table, what the foreign key tag_id to Product will be referred as
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
