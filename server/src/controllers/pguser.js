const userModels = require('../models/Users/pgUsers')

const getUsers = async (req, res) =>{
    const users = await userModels.getUsers();
    res.send(users);
}
const postUser = async (req, res) =>{
    const {body} = req;
    console.log(body)
    const result = await userModels.createNewUser(body)
    res.send(result);
}
const deleteUser = async (req, res) => {
  const { userId } = req.body;
  const result = await userModels.deleteUserById(userId);
  res.send({ msg: "delete successfully", result });
};

module.exports = {
  getUsers,
  postUser,
  deleteUser,
};