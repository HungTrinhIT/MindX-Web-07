const express = require("express");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      msg: "Missing required keys",
    });
  }

  try {
    const loginResponse = await AuthController.login({
      username,
      password,
    });
    return res.json(loginResponse);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
