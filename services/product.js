const Product = require("../database/models").Product;
const sequelize = require("../core/database");

/*
 * This file contains the logic for working with the Product entity
 */

// Create a record in the database ^
exports.create = data => {
  return Product.create(data);
};

// Find records in a database on the specified date ^
exports.findByDate = date => {
  return Product.findAll({ where: { date } }).map(products => {
    return products.dataValues;
  });
};

// Find all the dates that are in the database
exports.findAllDates = () => {
  return Product.findAll({
    attributes: ["date"],
    group: "date",
    order: ["date"]
  }).map(row => {
    return row.date;
  });
};

// Find all purchases for the specified year
exports.findByYear = year => {
  return sequelize
    .query(
      "SELECT * FROM summercamp2019.products AS A WHERE YEAR(A.date)=" + year
    )
    .then(data => {
      return data[0];
    });
};

// All purchases for the specified date
exports.allPurchases = () => {
  return Product.findAll({
    attributes: ["date"],
    group: "date",
    order: ["date"]
  }).map(async row => {
    var date = row.date;
    var allProducts = await Product.findAll({ where: { date }, raw: true }).map(
      products => {
        return products;
      }
    );
    return { date: date, products: allProducts };
  });
};

// Delete purchases on the specified date
exports.deleteForDate = date => {
  return Product.destroy({ where: { date } });
};