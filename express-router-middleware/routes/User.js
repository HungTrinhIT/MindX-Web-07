const express = require("express");
const { db } = require("../config/db");

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  const users = await db.users.find({ age: { $gt: 19 } }).toArray();

  res.json({
    data: users,
  });
});

module.exports = router;
