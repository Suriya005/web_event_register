const { myData } = require("../database/conn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");

const getUsers = async () => {
  const users = await myData.query("SELECT * from users");
  return users.rows;
};

const generatePassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return (passwordHashed = bcrypt.hash(password, salt));
};

const createNewUser = async (doc = {}) => {
    const insertDoc = { ...doc };
    insertDoc.password = await generatePassword(doc.password);
    console.log(insertDoc);
    await myData.query(
      `INSERT INTO users(user_id,password,status,title_name ,fname,lname ,sex ,birthday ,mejor ,faculty) VALUES('${insertDoc.userId}', '${insertDoc.password}', 'M','${insertDoc.title_name}', '${insertDoc.fname}', '${insertDoc.lname}', '${insertDoc.sex}', '${insertDoc.birthDay}', '${insertDoc.department}', '${insertDoc.facultyForm}')`
    );
    
    return { msg: "insert success" };
};

const deleteUserById = async (userId) => {
  await myData.query(`DELETE FROM test_user WHERE id=${userId}`);
  return { msg: "delete success" };
};

module.exports = {
  getUsers,
  createNewUser,
  deleteUserById,
};
