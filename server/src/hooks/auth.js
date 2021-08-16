const jwt = require("jsonwebtoken");
const config = require("../config");

const validateToken = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("missing authorization header");
    }

    const token = authorization.split(" ")[1];

    console.log(jwt.decode(token));

    await jwt.verify(token, config.secretKey);
  } catch (err) {
    res.statusCode = 401;
    throw err;
  }
};

module.exports = {
  validateToken,
};
