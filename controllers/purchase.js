const productService = require("../services/product");
const commandWrapper = require("../services/commandsWrapper");

exports.purchase = async (req, res) => {
  // Initializing data from request
  newPurchase = {
    date: req.body.date,
    price: req.body.price,
    currency: req.body.currency.toUpperCase(),
    title: req.body.title
  };

  // Create a purchase
  await commandWrapper
    .purchase(newPurchase)
    .then(async () => {
      // Send information about all purchases
      res.status(201).send(await productService.allPurchases());
      return;
    })
    .catch(err => {
      res.status(400).send(err.message);
      return;
    });
};