const userModels = require("../models/Users/pgUsers");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const users = await userModels.getUsers();
  const result = { users: users };
  console.log(result);
  return result;
};

const getUserById = async (req, res) => {
  const user = await userModels.getUserById();
  res.send(user);
};

const postUser = async (req, res) => {
  const { body } = req;
  const result = await userModels.createNewUser(body);
  res.send(result);
};

const updateUser = async (req, res) => {
  const { body } = req;
  const result = await userModels.updateUser(body);
  res.send(result);
};

const postUserLogin = async (req, res) => {
 try {
  const { userId, password } = req.body;
  const userToken = await userModels.loginUser(userId, password);

  const result = { userToken: userToken };
  return result;
 } catch (error) {
   return res.send({errorMessage:'กรุณากรอก ID และ Password ให้ถูกต้อง'});
 }

};
const verifyToken = async (req, res) => {
  var decoded = jwt.decode(req.body.token)
  // var decoded = jwt.verify(token, '123456');
  console.log(decoded)
  res.send(JSON.stringify(decoded))
}


module.exports = {
  getUsers,
  postUser,
  getUserById,
  postUserLogin,
  updateUser,
  verifyToken
};
