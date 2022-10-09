const { db } = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRY_TIME = process.env.JWT_EXPIRY_TIME;

const login = async ({ username, password }) => {
  const existingUser = await db.users.findOne({
    username,
  });
  const { id, address } = existingUser;

  if (existingUser) {
    const isMatchPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isMatchPassword) {
      const token = jwt.sign(
        {
          username,
          id,
          address,
        },
        JWT_SECRET_KEY,
        {
          expiresIn: JWT_EXPIRY_TIME,
        }
      );

      return {
        token,
        isAuthenticated: true,
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
