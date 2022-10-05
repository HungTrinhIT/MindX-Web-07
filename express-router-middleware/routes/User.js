const express = require("express");
const { db } = require("../config/db");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await db.users.find().toArray();

  res.json({
    data: users,
  });
});

router.post("/", async (req, res) => {
  const { username, password, role, address } = req.body;

  if (!username || !password || !role || !address) {
    return res.status(400).json({
      msg: "Missing required keys",
    });
  }

  const user = await db.users.find({ username }).toArray();
  const isAlreadyExistUser = user.length > 0;

  if (isAlreadyExistUser) {
    return res.json({
      msg: "Username already exist, please try again",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = {
    username,
    role,
    address,
    password: hashPassword,
  };

  try {
    const response = await db.users.insertOne(newUser, {});
    return res.status(201).json({
      data: response,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
