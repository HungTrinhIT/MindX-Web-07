const express = require("express");
const categoryController = require("../controllers/Category");
const router = express.Router();

router.get("/", (req, res) => {
  const data = categoryController.getAllCategory();
  res.json({
    msg: "Get successfully",
    data: data,
  });
});

module.exports = router;
