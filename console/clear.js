const commandWrapper = require("../services/commandsWrapper");
const allConsole = require("./all");

exports.clear = input => {
  // Initializing data from input
  const date = input[1];

  // Delete all purchases on the specified date
  commandWrapper
    .clear(date)
    .then(() => {
      // Display information in the specified format
      allConsole.all();
    })
    .catch(err => {
      console.log(err.message);
      return;
    });
};