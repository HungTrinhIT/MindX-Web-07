const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await db.users.find().toArray();

  res.json({
    data: users,
  });
});

//
router.post("/", async (req, res, next) => {
  const { username, password, role, address } = req.body;

  if (!username || !password || !address) {
    return res.status(400).json({
      msg: "Missing required keys",
    });
  }

  const user = { username, password, role, address };
  try {
    const response = await UserController.Create(user);
    return res.status(201).json({
      msg: "Create successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
