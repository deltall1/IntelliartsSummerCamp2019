'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    date: DataTypes.DATEONLY,
    price: DataTypes.FLOAT(10,2),
    currency: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};