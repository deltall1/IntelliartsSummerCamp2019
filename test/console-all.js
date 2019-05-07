const commands = require("../services/product");

describe("console all", () => {
  it("User can get all purchases", async () => {
    commands.allPurchases();
  });
});