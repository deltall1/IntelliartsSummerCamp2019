const productService = require("../services/product");
const requestPromise = require("request-promise");

exports.conversion = async input => {
  // Initializing data from input
  const year = input[1];
  const currencyInto = input[2];
  const fixerIo = {
    url: "http://data.fixer.io/api/latest",
    access_key: "1610abf1e51a752d365629d290f86c38"
  };

  // Get values of all currencies based on euro
  currenciesInEuro = await requestPromise(
    fixerIo.url + "?access_key=" + fixerIo.access_key
  ).then(body => {
    return JSON.parse(body);
  });

  // Check entered data
  try {
    if (!isFinite(year) || year.length != 4) {
      throw new Error("Incorrect date");
    } else if (typeof currenciesInEuro.rates[currencyInto] == "undefined") {
      throw new Error("Currency not available");
    }
  } catch (e) {
    console.log(e.message);
    return;
  }

  // Find all products sold for the specified year.
  productService
    .findByYear(year)
    .then(products => {
      var reportSum = 0;
      products.forEach(product => {
        var currencyFrom = product.currency;
        // Calculate the cost of the product based on the euro
        reportSum +=
          (currenciesInEuro.rates[currencyInto] /
            currenciesInEuro.rates[currencyFrom]) *
          product.price;
      });
      console.log(reportSum.toFixed(2), currencyInto);
    })
    .catch(err => {
      console.log(err.message);
    });
};