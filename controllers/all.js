const productService = require("../services/product");

exports.all = async (req, res) => {
  // Send information about all purchases
  res.status(200).send(await productService.allPurchases());
};