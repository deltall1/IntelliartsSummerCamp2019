const supertest = require("supertest");
const app = require("../app");

describe("api report", () => {
  it("User gets a report for the specified year", done => {
    supertest(app)
      .post("/api/report")
      .send({
        year: "2019",
        currency: "UAH"
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("User gets an error entering incorrect year", done => {
    supertest(app)
      .post("/api/report")
      .send({
        year: "invalid year",
        currency: "UAH"
      })
      .expect(/Incorrect year/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("User gets an error entering incorrect currency", done => {
    supertest(app)
      .post("/api/report")
      .send({
        year: "2019",
        currency: "invalid currency"
      })
      .expect(/Currency not available/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
