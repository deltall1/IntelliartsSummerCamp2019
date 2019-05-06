const productService = require("../services/product");

// Display information in the specified format
exports.all = () => {
  productService
    .allPurchases()
    .map(oneDay => {
      console.log("\n" + oneDay.date);
      oneDay.products.forEach(product => {
        console.log(product.title, product.price, product.currency);
      });
    })
    .catch(err => {
      console.log(err.message);
      return;
    });
};