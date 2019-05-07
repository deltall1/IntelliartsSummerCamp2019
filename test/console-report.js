const commands = require("../services/commandsWrapper");
const expect = require("chai").expect;

describe("console report", () => {
  it("User gets a report for the specified year", async () => {
    const data = {
      year: "2019",
      currencyInto: "UAH"
    };
    const yearsReport = await commands.report(data);
    expect(yearsReport).to.have.keys(["sum", "currency"]);
  });

  it("User gets an error entering incorrect year", async () => {
    const data = {
      year: "invalid year",
      currencyInto: "UAH"
    };
    commands.report(data).catch(err => {
      expect(err.message).equal("Incorrect year");
    });
  });

  it("User gets an error entering incorrect currency", async () => {
    const data = {
      year: "2019",
      currencyInto: "invalid currency"
    };
    commands.report(data).catch(err => {
      expect(err.message).equal("Currency not available");
    });
  });
});
