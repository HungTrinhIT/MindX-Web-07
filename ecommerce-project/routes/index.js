const express = require("express");
const userRouter = require("./user");
const imageRouter = require("./image");

const router = express.Router();

router.get("/test", (req, res) => {
  return res.json({
    msg: "test",
  });
});

router.use("/images", imageRouter);
router.use("/users", userRouter);

module.exports = router;
