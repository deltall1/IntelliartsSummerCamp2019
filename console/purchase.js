const productService = require("../services/product");
const allConsole = require("./all");

exports.createPurchase = input => {
  // Check entered data
  try {
    if (input.length != 5) {
      throw new Error("Not all data entered");
    } else if (isNaN(Date.parse(input[1]))) {
      throw new Error("Incorrect date");
    } else if (isNaN(input[2])) {
      throw new Error("Incorrect price. Price must be a digit");
    } else if (input[3].length != 3) {
      throw new Error("Incorrect currency");
    }
  } catch (e) {
    console.log(e.message);
    return;
  }

  // Initializing data from input
  const goods = {
    date: input[1],
    price: input[2],
    currency: input[3],
    title: input[4].replace(/['"]/g, "")
  };

  // Create a purchase
  return productService
    .create(goods)
    .then(() => {
      // Display information in the specified format
      allConsole.all();
    })
    .catch(err => {
      console.log(err.message);
    });
};