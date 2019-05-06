const commandWrapper = require("../services/commandsWrapper");

exports.conversion = async input => {
  // Initializing data from input
  const data = {
    year: input[1],
    currencyInto: input[2]
  };

  // Get a report for the specified year
  commandWrapper
    .report(data)
    .then(report => {
      console.log(report.sum, report.currency);
    })
    .catch(err => {
      console.log(err.message);
      return;
    });
};
