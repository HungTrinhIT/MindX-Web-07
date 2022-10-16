const express = require("express");
const UserController = require("../controllers/user");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { fullname, password, email } = req.body;

  // Validations
  if (!fullname || !password || !email) {
    return res.json({
      msg: "Missing required keys",
    });
  }

  try {
    const user = await UserController.findOne({ email });
    console.log("user:", user);
    
    return res.json({
      msg: user,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
