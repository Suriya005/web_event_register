const jwt = require("jsonwebtoken");
const config = require("../config");

// // ตรวจสอบ token ของ Members
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

// ตรวจสอบ token ของ Admin
const validateTokenAdmin = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("missing authorization header");
    }
    console.log('**************4444***********************')
    console.log(authorization)
    console.log("*************444************************");
    // const token = authorization.split(" ")[1];
    const token = authorization;

    console.log(jwt.decode(token));

    await jwt.verify(token, config.secretKeyAdmin);
  } catch (err) {
    res.statusCode = 401;
    throw err;
  }
};

module.exports = {
  validateToken,
  validateTokenAdmin,
};
