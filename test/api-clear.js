const supertest = require("supertest");
const app = require("../app");

describe("api clear", () => {
  it("User can remove all purchases for specified date", done => {
    supertest(app)
      .post("/api/clear")
      .send({
        date: "2017-04-26"
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("User gets an error entering incorrect date", done => {
    supertest(app)
      .post("/api/clear")
      .send({
        date: "2017/04/26"
      })
      .expect(/Incorrect date format/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
