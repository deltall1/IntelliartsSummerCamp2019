const productService = require("../services/product");

exports.all = async (req, res) => {
  res.send(await productService.allPurchases());
};