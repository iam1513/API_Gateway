const express = require("express");

const { ServerConfig, Logger } = require("./config"); // Auto pic index.js if name is index.js  else we hav to mention file name also
const apiRoutes = require("./routes");

const app = express();

app.use(express.json()); // Read about this (Whatever given read in like JSON)
app.use(express.urlencoded({ extended: true })); // check by hovering

app.use("/api", apiRoutes); // When we get req with /api, we will redirect to api routes

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on Port : ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server", "root", {});
});
