const express = require("express");

const { InfoController } = require("../../controllers"); // {} used to import as object
const { AuthRequestMiddlewares } = require("../../middlewares");
const router = express.Router();
const userRouter = require("./user-routes");

router.get("/info", AuthRequestMiddlewares.checkAuth, InfoController.info);
router.use("/user", userRouter);

module.exports = router;
