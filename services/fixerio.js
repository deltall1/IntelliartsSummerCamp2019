const requestPromise = require("request-promise");

// Returns real-time exchange rate data for all available currencies
exports.latestExchangeRate = async () => {
  // Initializing api request
  const call = {
    url: "http://data.fixer.io/api/latest",
    access_key: "1610abf1e51a752d365629d290f86c38"
  };

  // Returns response from fixer-io
  return await requestPromise(call.url + "?access_key=" + call.access_key).then(
    body => {
      return JSON.parse(body);
    }
  );
};

// Convert any amount from one currency to another
exports.currencyConversion = (exchangeRates, from, into, amount) => {
  const convertedCurrency = exchangeRates[into] / exchangeRates[from];

  const convertedPrice = convertedCurrency * amount;

  return convertedPrice;
};

exports.isValidCurrency = async currency => {
  // Get letest exchange rates from fixer-io
  const exchangeRates = await this.latestExchangeRate().then(data => {
    return data.rates;
  });

  // Check if there is a currency in the list
  if (typeof exchangeRates[currency] == "undefined") {
    return false;
  } else {
    return true;
  }
};
