const express = require("express");

const studentRouter = require("./Student");
const teacherRouter = require("./Teacher");
const authRouter = require("./Auth");
const categoryRouter = require("./Category");

const authMdw = require("../middlewares/auth");
const apiLogger = require("../middlewares/logger");

const router = express.Router();

router.use(apiLogger);

router.use("/auth", authRouter);

module.exports = router;
