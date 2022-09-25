const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const USERNAME = process.env.BASIC_USERNAME;
const PASSWORD = process.env.BASIC_PASSWORD;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRY_TIME = process.env.JWT_EXPIRY_TIME;

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      msg: "Missing required keys",
    });
  }

  if (username === USERNAME && password === PASSWORD) {
    const token = jwt.sign(
      {
        fullname: "Hung Trinh",
        role: "admin",
      },
      JWT_SECRET_KEY,
      { expiresIn: JWT_EXPIRY_TIME }
    );
    return res.json({
      msg: "Login successfully",
      token,
    });
  }

  return res.status(403).json({
    msg: "Password or username is not correct, please try again",
  });
});

module.exports = router;
