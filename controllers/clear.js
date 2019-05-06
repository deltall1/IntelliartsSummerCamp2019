const productService = require("../services/product");
const commandWrapper = require("../services/commandsWrapper");

exports.clear = async (req, res) => {
  // Initializing data from input
  const date = req.body.date;

  // Delete all purchases on the specified date
  await commandWrapper
    .clear(date)
    .then(async () => {
      // Send information about all purchases
      res.status(200).send(await productService.allPurchases());
      return;
    })
    .catch(err => {
      res.status(400).send(err.message);
      return;
    });
};