const buildApp = require("./src/app");
const config = require("./src/config");
const mongooes = require("mongoose");
const postgreSQL = require("./src/models/database/conn");

const { Pool, Client } = require("pg");
const pool = new Pool(config.postgresql);

const startApp = async () => {
  const appOptions = {
    logger: true,
  };
  const app = buildApp(appOptions);
  
  try {
    // Connect PostsgreSQL ********
    //   `INSERT INTO test_user values(${insertDoc.id},'${insertDoc.fname}', '${insertDoc.lname}', '${insertDoc.email}', '${insertDoc.password}')`
    const users = await postgreSQL.myData.query(
      `SELECT * from users_tb where user_id='6108111004'`
    );
    // console.log(users.rows[0]);

    await app.listen(config.port);
    console.log(`app is listening on port ${config.port}`);
  } catch (err) {
    throw err;
  }
};

startApp();
