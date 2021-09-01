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
  const { userId, password } = req.body;
  const userToken = await userModels.loginUser(userId, password);
  // res.send(console.log(userToken));

  console.log("*******************************");
  console.log(userToken);
  console.log("*******************************");
  // return res.json(userToken);
  
  const result = { userToken: userToken };
  return result;
  // return res.status(200).json(userToken);
  // res.cookie("SESSIONID", userToken, { httpOnly: true, secure: true });
};

module.exports = {
  getUsers,
  postUser,
  getUserById,
  postUserLogin,
  updateUser,
};
