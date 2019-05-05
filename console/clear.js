const productService = require("../services/product");
const allConsole = require("./all");

exports.clear = async input => {
  // Check entered data
  try {
    if (input.length != 2) {
      throw new Error("Not all data entered");
    } else if (isNaN(Date.parse(input[1]))) {
      throw new Error("Incorrect date");
    } else if (input[1].length != 10) {
      throw new Error("Incorrect date");
    }
  } catch (e) {
    console.log(e.message);
    return;
  }

  // Initializing data from input
  const date = input[1];

  // Delete all purchases on the specified date
  await productService.deleteForDate(date);

  // Display information in the specified format
  allConsole.all();
};