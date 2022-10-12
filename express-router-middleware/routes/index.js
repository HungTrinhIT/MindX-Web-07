const express = require("express");

const authRouter = require("./Auth");
const userRouter = require("./User");

const apiLogger = require("../middlewares/logger");

const router = express.Router();

router.use(apiLogger);

router.use("/auth", authRouter);
router.use("/users", userRouter);

module.exports = router;
