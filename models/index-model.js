// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag,});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag,});


// Product.hasMany(ProductTag, { foreignKey: 'product_id' });
// Tag.hasMany(ProductTag, { foreignKey: 'tag_id' });
// ProductTag.belongsTo(Product, { foreignKey: 'product_id' });
// ProductTag.belongsTo(Tag, { foreignKey: 'tag_id' });
// Product.belongsTo(Category, {foreignKey: 'category_id'});
// Category.hasMany(Product, {foreignKey: 'category_id'});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
