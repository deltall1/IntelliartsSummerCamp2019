require("dotenv-defaults").config();

const express = require("express");
const bodyParser = require("body-parser"); // Needs in parsing incoming request bodies

const configs = require("./config/app"); // General application configs
const consoleInit = require("./core/consoleInit"); // Console commands logic
const routes = require("./routes/index");

const app = express(); // Create instance of server

// Initializing of body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initializing of routes
app.use("/api", routes.api);

// Initializing of listener
app.listen(configs.port, configs.host, () => {
  console.log(
    `app now listening for request on ${configs.host}:${configs.port}.`
  );

  // Run the function to read information from the console.
  consoleInit.run();
});