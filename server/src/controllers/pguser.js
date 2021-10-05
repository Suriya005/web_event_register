const userModels = require("../models/Users/pgUsers");

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
  console.log("*******************************");
  console.log(userToken);
  console.log("*******************************");
  const result = { userToken: userToken };
  return result;
 } catch (error) {
   return res.send({errorMessage:'กรุณากรอก ID และ Password ให้ถูกต้อง'});
 }

};

module.exports = {
  getUsers,
  postUser,
  getUserById,
  postUserLogin,
  updateUser,
};
