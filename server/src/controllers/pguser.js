const userModels = require("../models/Users/pgUsers");

const getUsers = async (req, res) => {
  const { userId } = req.params;
  const users = await userModels.getUsers(userId);
  res.send(users);
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
  const result = await userModels.updateUser(body)
  res.send(result);
}



const postUserLogin = async (req, res) => {
  const { userId, password } = req.body;
  const userToken = await userModels.loginUser(userId, password);
  // res.send(console.log(userToken));
  return userToken;
};

module.exports = {
  getUsers,
  postUser,
  deleteUser,
  getUserById,
  postUserLogin,
  updateUser,
};
