const express = require("express");

const studentRouter = require("./Student");
const teacherRouter = require("./Teacher");

const apiLogger = require("../middlewares/logger");
const router = express.Router();

router.use(apiLogger);

router.use("/students", studentRouter);
router.use("/teachers", teacherRouter);

module.exports = router;
 