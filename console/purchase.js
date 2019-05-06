const allConsole = require("./all");
const commandWrapper = require("../services/commandsWrapper");

exports.createPurchase = input => {
  // Initializing data from input
  const purchase = {
    date: input[1],
    price: input[2],
    currency: input[3].toUpperCase(),
    title: input[4].replace(/['"]/g, "")
  };

  // Create a purchase
  commandWrapper
    .purchase(purchase)
    .then(() => {
      // Display information in the specified format
      allConsole.all();
    })
    .catch(err => {
      console.log(err.message);
      return;
    });
};
