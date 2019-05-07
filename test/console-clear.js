const commands = require("../services/commandsWrapper");
const expect = require("chai").expect;

describe("console clear", () => {
  it("User can remove all purchases for specified date", () => {
    const date = "2017-04-26";
    commands.clear(date);
  });

  it("User gets an error entering incorrect date", () => {
    const date = "invalid date";
    commands.clear(date).catch(err => {
      expect(err.message).equal("Incorrect date format");
    });
  });
});
