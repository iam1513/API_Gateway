const express = require("express");
const rateLimit = require("express-rate-limit");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { ServerConfig, Logger } = require("./config"); // Auto pic index.js if name is index.js  else we hav to mention file name also
const apiRoutes = require("./routes");

const app = express();

const limiter = rateLimit({
  window: 2 * 60 * 1000, // In 2 min
  max: 100, // max 2 devices from 1 IP in 2 mins
});

app.use(express.json()); // Read about this (Whatever given read in like JSON)
app.use(express.urlencoded({ extended: true })); // check by hovering
app.use(limiter);
app.use(
  "/flightsService",
  createProxyMiddleware({
    target: ServerConfig.FLIGHT_SERVICE,
    changeOrigin: true,
  })
);
app.use(
  "/bookingsService",
  createProxyMiddleware({
    target: ServerConfig.BOOKING_SERVICE,
    changeOrigin: true,
  })
);
app.use("/api", apiRoutes); // When we get req with /api, we will redirect to api routes

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on Port : ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server", "root", {});
});

/**
 * localhost3001/api/v1/flights
 */
