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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // const token = authorization.split(" ")[1];
    const token = authorization;
=======
=======

    const token = authorization.split(" ")[1];
>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)

    const token = authorization.split(" ")[1];

>>>>>>> parent of 6dc2ee6 (login jsonwebtoken)
=======
=======
>>>>>>> parent of 2c4f4e8 (u)
    console.log('**************4444***********************')
    console.log(authorization)
    console.log("*************444************************");
    // const token = authorization.split(" ")[1];
    const token = authorization;

<<<<<<< HEAD
>>>>>>> parent of 2c4f4e8 (u)
=======
>>>>>>> parent of 2c4f4e8 (u)
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
