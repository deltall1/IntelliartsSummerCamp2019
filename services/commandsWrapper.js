const productService = require("./product");
const dateService = require("./date");
const fixerio = require("./fixerio");

/*
 *  This file contains the application logic.
 */

exports.purchase = async data => {
  // Check input data
  try {
    if (!dateService.isDate(data.date)) {
      throw new Error("Incorrect date format");
    } else if (isNaN(data.price)) {
      throw new Error("Invalid price, expected number");
    } else if (!(await fixerio.isValidCurrency(data.currency))) {
      throw new Error("This currency is not available");
    }
  } catch (err) {
    return Promise.reject(err);
  }

  // Create new purchase
  return productService.create(data).catch(err => {
    return Promise.reject(err);
  });
};

exports.clear = date => {
  // Check input data
  try {
    if (!dateService.isDate(date)) {
      throw new Error("Incorrect date format");
    }
  } catch (err) {
    return Promise.reject(err);
  }

  // Delete all purchases on the specified date
  return productService.deleteForDate(date).catch(err => {
    return Promise.reject(err);
  });
};

exports.report = async data => {
  // Check input data
  try {
    if (!dateService.isYaer(data.year)) {
      throw new Error("Incorrect year");
    } else if (!(await fixerio.isValidCurrency(data.currencyInto))) {
      throw new Error("Currency not available");
    }
  } catch (err) {
    return Promise.reject(err);
  }

  // Get letest exchange rates from fixer-io
  const exchangeRates = await fixerio
    .latestExchangeRate()
    .then(data => {
      return data.rates;
    })
    .catch(err => {
      return Promise.reject(err);
    });

  // Find all products sold for the specified year.
  return productService
    .findByYear(data.year)
    .then(async products => {
      var report = 0;

      await products.forEach(product => {
        var currencyFrom = product.currency;

        // Calculate the amount of sales for the year
        report += fixerio.currencyConversion(
          exchangeRates,
          currencyFrom,
          data.currencyInto,
          product.price
        );
      });

      // Returns the amount rounded to hundredths
      return { sum: report.toFixed(2), currency: data.currencyInto };
    })
    .catch(err => {
      return Promise.reject(err);
    });
};