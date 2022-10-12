const { db } = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserController = require("../controllers/UserController");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRY_TIME = process.env.JWT_EXPIRY_TIME;

const login = async ({ username, password }) => {
  const existingUser = await db.users.findOne({
    username,
  });

  if (existingUser) {
    const { _id, address } = existingUser;
    const isMatchPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isMatchPassword) {
      const token = jwt.sign(
        {
          username,
          address,
          _id,
        },
        JWT_SECRET_KEY,
        {
          expiresIn: JWT_EXPIRY_TIME,
        }
      );

      const user = await UserController.GetById(_id);
      const { password, ...restUser } = user;
      return {
        token,
        isAuthenticated: true,
        user: restUser,
      };
    }
  }

  throw Error("Username or password is not correct");
};
const verifyToken = async () => {};

module.exports = {
  login,
  verifyToken,
};
