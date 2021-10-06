const { myData } = require("../database/conn");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");

// ค้นหาข้อมูล user ทั้งหมด
const getUsers = async () => {
  const users = await myData.query(`SELECT * from users_tb`);
  return users.rows;
};

// ค้นหา user ตาม ID
const getUserById = async (userId) => {
  const user = await myData.query(
    `SELECT * from users where user_id=${userId}`
  );
  return users.rows;
};

// ฟังก์ชั่นเข้ารหัสสำหรับ password
const generatePassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return (passwordHashed = bcrypt.hash(password, salt));
};

// ฟังก์ชั่นสร้าง user โดยสถานะ default จะเป็น M คือ Member
const createNewUser = async (doc = {}) => {
  const insertDoc = { ...doc };
  insertDoc.password = await generatePassword(doc.password);
  console.log(insertDoc);
  await myData.query(
    `INSERT INTO users_tb(user_id,password,user_status,title_name ,fname,lname ,sex ,birthday ,major_id) VALUES('${insertDoc.userId}', '${insertDoc.password}', 'M','${insertDoc.title_name}', '${insertDoc.fname}', '${insertDoc.lname}', '${insertDoc.sex}', '${insertDoc.birthDay}', '${insertDoc.department}')`
  );
  return { msg: "insert success" };
};

// ฟังก์ชั่นแก้ไข user
const updateUser = async (doc= {})=> {
const Doc = { ...doc };
console.log(Doc)
await myData.query(
  `UPDATE users_tb SET password='${Doc.password}', fname='${Doc.fname}',lname='${Doc.lname}',sex='${Doc.sex}',faculty='${Doc.facultyForm}',mejor='${Doc.department}', birthday='${Doc.birthDay}',title_name='${Doc.titleName}' WHERE user_id='${Doc.userId}';`
);
}

// ฟังก์ชั่นลบ user
const deleteUserById = async (userId) => {
  await myData.query(`DELETE FROM test_user WHERE id=${userId}`);
  return { msg: "delete success" };
};

// ฟังก์ชั่นตรวจสอบ password กับ password ที่เข้ารหัส
comparePassword = async (password, existsPassword) => {
  const isPasswordCorrect = await bcrypt.compare(password, existsPassword);
  if (!isPasswordCorrect) {
    throw new Error(`password incorrect`);
  }
  return true;
};

// ฟังก์ชั่น login user
const loginUser = async (userId, password) => {
  const user = await myData.query(
    `SELECT * from users_tb where user_id='${userId}'`
  );
  if (user.rowCount > 1) {
    throw new Error("not find");
  }
  await comparePassword(password, user.rows[0].password);
  // ตรวจสอบสถานผู้ใช้แล้วแจกโทเคนให้ผู้ใช้
    const token = jwt.sign(
      {
        status:user.rows[0].user_status,
      },
      config.secretKey,
      {
        expiresIn: 60 * 3,
      }
    );
    console.log(jwt.decode(token))
    return token;
  
};

module.exports = {
  getUsers,
  createNewUser,
  deleteUserById,
  getUserById,
  loginUser,
  updateUser,
};
