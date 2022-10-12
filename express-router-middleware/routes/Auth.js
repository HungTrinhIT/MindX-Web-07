const express = require("express");
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const authMdw = require("../middlewares/auth");
const router = express.Router();

// /auth
router.get("/", authMdw, async (req, res, next) => {
  const user = req.user;
  const userId = user._id;
  const userInfo = await UserController.GetById(userId);
  const { password, ...restUserInfo } = userInfo;

  return res.json({
    msg: "Successfully",
    data: restUserInfo,
  });
});

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
