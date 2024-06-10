// const { response } = require("express");

const { StatusCodes } = require("http-status-codes");
const { UserService } = require("../services");

const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /signup
 * req-body: {email : "New York", password : "ejanmsrfona"}
 */

async function createUser(req, res) {
  try {
    console.log(req.body);
    const user = await UserService.createUser({
      email: req.body.email,
      password: req.body.password,
    });
    // returning the city we created
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    // Changed after util , we had raw json here (REMEMBER)
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createUser,
};
