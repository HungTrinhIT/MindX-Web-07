const express = require("express");
const { db } = require("../config/db");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await db.users.find({
    age: {$gt}
  });
  res.json({
    data: users,
  });
});

module.exports = router;


