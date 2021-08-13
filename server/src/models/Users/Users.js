const Users = require('./schema')
const bcrypt = require('bcrypt')

const generatePassword = async (password) => {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    return passwordHashed = bcrypt.hash(password, salt)

}

const createNewUser = async (doc = {}) =>{
    const insertDoc = {...doc}

    insertDoc.password = await generatePassword(doc.password);

    const newUser = new Users(insertDoc)

    return await newUser.save()
}

const getUsers = async (query = {}) => {
    const users = await Users.find().lean();
    return users
}

const getUserId = async (userId) => {
    const user = await Users.findById(userId)
    return user
}
const updateuserById = async (userId, doc) =>{
    const updatedUser = await Users.updateOne({
        _id: userId,
    }, doc, {
        returnOriginal : false
    })
    return updatedUser
}

const deleteUserById = async (userId) =>{
    const deleted = await Users.remove({
        _id: userId,
    })
    return deleted
}

module.exports = {
    createNewUser: createNewUser,
    getUsers: getUsers,
    getUserId: getUserId,
    updateuserById: updateuserById,
    deleteUserById: deleteUserById,
}