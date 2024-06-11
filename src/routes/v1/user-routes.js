const express = require("express");
const router = express.Router();
const { UserController } = require("../../controllers");
const { AuthRequestMiddlewares } = require("../../middlewares");
const middlewares = require("../../middlewares");
router.post(
  "/signup",
  AuthRequestMiddlewares.validateAuthRequest,
  UserController.createUser
);
router.post(
  "/signin",
  AuthRequestMiddlewares.validateAuthRequest,
  UserController.signin
);

router.post(
  "/role",
  AuthRequestMiddlewares.checkAuth,
  AuthRequestMiddlewares.isAdmin,
  UserController.addRoleToUser
);

module.exports = router;
