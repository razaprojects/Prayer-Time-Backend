const jwt = require("jsonwebtoken");
const mySecret = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, mySecret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "error occurred, please try again" });
      } else {
        req.decodedJWT = decodedToken;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ message: "Unauthorized Access. Please Login In Again" });
  }
};
