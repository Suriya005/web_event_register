const Users = require('./schema')
const bcrypt = require('bcrypt')

const generatePassword = async (password) => {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const passwordHashed = bcrypt.hash(password, salt)

}

const createNewUser = async (doc = {}) =>{
    const insertDoc = {...doc}

    insertDoc.password = await generatePassword(doc.password);

    const newUser = new Users.User(insertDoc)

    return await newUser.save()
}