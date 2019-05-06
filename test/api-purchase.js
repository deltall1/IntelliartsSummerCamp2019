const supertest = require("supertest");
const app = require("../app");

describe("api purchase", () => {
  it("User can create a purchase", done => {
    supertest(app)
      .post("/api/purchase")
      .send({
        date: "2017-04-26",
        price: "100",
        currency: "USD",
        title: "Photo Frame"
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("User gets an error entering incorrect date", done => {
    supertest(app)
      .post("/api/purchase")
      .send({
        date: "2017/04/26",
        price: "100",
        currency: "USD",
        title: "Photo Frame"
      })
      .expect(/Incorrect date format/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("User gets an error entering incorrect price", done => {
    supertest(app)
      .post("/api/purchase")
      .send({
        date: "2017-04-26",
        price: "invalid-price",
        currency: "USD",
        title: "Photo Frame"
      })
      .expect(/Invalid price, expected number/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("User gets an error entering incorrect currency", done => {
    supertest(app)
      .post("/api/purchase")
      .send({
        date: "2017-04-26",
        price: "100",
        currency: "invalid-currency",
        title: "Photo Frame"
      })
      .expect(/This currency is not available/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
