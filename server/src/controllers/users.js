const userModels = require('../models/Users/Users')
const getUsers = async(req, res) =>{
    res.send('getUsers');
}
const getUserById = async(req, res) => {
    res.send("getUserById");
};
const postUser = async (req, res) => {
    const {body} = req
    const user = await userModels.createNewUser(body);
    res.send(user);
};
const patchUser = async (req, res) => {
    res.send("patchUser");
};
const deleteUser = async (req, res) => {
    res.send("deleteUser");
};

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    postUser: postUser,
    patchUser: patchUser,
    deleteUser: deleteUser
}