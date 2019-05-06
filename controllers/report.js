const commandWrapper = require("../services/commandsWrapper");

exports.report = async (req, res) => {
  // Initializing data from request
  const data = {
    year: req.body.year,
    currencyInto: req.body.currency
  };

  // Get a report for the specified year
  commandWrapper
    .report(data)
    .then(report => {
      res
        .status(200)
        .json({ report: report.sum, currency: report.currency });
      return;
    })
    .catch(err => {
      res.status(400).send(err.message);
      return;
    });
};
