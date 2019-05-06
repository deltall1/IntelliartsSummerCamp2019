const supertest = require("supertest");
const app = require("../app");

describe("api all", () => {
  it("User can get all purchases", done => {
    supertest(app)
      .get("/api/all")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
