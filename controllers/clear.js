const productService = require("../services/product");

exports.clear = async (req, res) => {
  await productService.deleteForDate(req.body.date);
  res.send(await productService.allPurchases());
};