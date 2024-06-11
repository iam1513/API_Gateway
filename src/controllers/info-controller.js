// const express = require("express");

const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    // We also have res.status(StatusCodes.NOT_FOUND).json,res.status(500).json ---> To change our status code
    success: true,
    message: "API is live", // Custom message
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
