const express = require("express");

const studentRouter = require("./Student");
const teacherRouter = require("./Teacher");
const authRouter = require("./Auth");

const authMdw = require("../middlewares/auth");
const apiLogger = require("../middlewares/logger");

const router = express.Router();

router.use(apiLogger);
router.use(authMdw);

router.use("/students", studentRouter);
router.use("/teachers", teacherRouter);
router.use("/auth", authRouter);

module.exports = router;
