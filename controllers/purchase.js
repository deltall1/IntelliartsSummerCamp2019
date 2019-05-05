const productService = require("../services/product");

exports.purchase = async (req, res) => {
  newPurchase = {
    date: req.body.date,
    price: req.body.price,
    currency: req.body.currency,
    title: req.body.title
  };
  await productService.create(newPurchase);
  res.send(await productService.allPurchases());
};