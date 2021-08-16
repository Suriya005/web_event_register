const { myData } =require('../database/conn')


const getUsers = async () => {
    const db = await myData
  const users = await db.query('SELECT * from test_user');
  return users.rows;
};

module.exports ={
    getUsers
}
