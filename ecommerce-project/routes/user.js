const express = require("express");
const UserController = require("../controllers/user");
const bcrypt = require("bcrypt");

const router = express.Router();

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

router.post("/", async (req, res, next) => {
  const { fullname, password, email } = req.body;

  // Validation
  if (!fullname || !password || !email) {
    return res.json({
      msg: "Missing required keys",
    });
  }

  try {
    const user = await UserController.findOne({ email });
    if (user) {
      return res.status(400).json({
        msg: "Email already exist, please try another one!",
      });
    }

    const newUser = {
      fullname,
      password: await hashPassword(password),
      email,
    };

    await UserController.create(newUser);

    return res.json({
      msg: "User create successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
