const commands = require("../services/commandsWrapper");
const expect = require("chai").expect;

describe("console purchase", () => {
  it("User can create a purchase", async () => {
    const data = {
      date: "2017-04-26",
      price: "100",
      currency: "USD",
      title: "Photo Frame"
    };
    const yearsReport = await commands.purchase(data);
    expect(yearsReport.dataValues).to.have.keys([
      "id",
      "date",
      "price",
      "currency",
      "title",
      "createdAt",
      "updatedAt"
    ]);
  });

  it("Usersadas gets an error entering incorrect date", async () => {
    const data = {
      date: "invalid date",
      price: "100",
      currency: "USD",
      title: "Photo Frame"
    };
    commands.purchase(data).catch(err => {
      expect(err.message).equal("Incorrect date format");
    });
  });

  it("User gets an error entering incorrect price", async () => {
    const data = {
      date: "2017-04-26",
      price: "invalid price",
      currency: "USD",
      title: "Photo Frame"
    };
    commands.purchase(data).catch(err => {
      expect(err.message).equal("Invalid price, expected number");
    });
  });

  it("User gets an error entering incorrect currency", async () => {
    const data = {
      date: "2017-04-26",
      price: "100",
      currency: "invalid currency",
      title: "Photo Frame"
    };
    commands.purchase(data).catch(err => {
      expect(err.message).equal("This currency is not available");
    });
  });
});
