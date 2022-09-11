const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_KEY = "token";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = (req, res, next) => {
  const token = req.headers[ACCESS_TOKEN_KEY];
  if (!token) {
    return res.status(400).json({
      msg: "Access token is required",
    });
  }
  const decoded = jwt.verify(token, JWT_SECRET_KEY);
  if (!decoded) {
    throw new Error("Token is not valid, no authorization!");
  }

  console.log(req.locals);
  req.user = decoded;
  next();
};
