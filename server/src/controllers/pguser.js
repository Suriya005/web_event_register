const userModels = require('../models/Users/pgUsers')

const getUsers = async (req, res) =>{
    const users = await userModels.getUsers();
    res.send(users);
}

module.exports ={
    getUsers
}