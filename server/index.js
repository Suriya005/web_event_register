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
    // connect MongoDB
    // await mongooes
    //   .connect(config.mongodb.uri, {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useUnifiedTopology: true,
    //   })
    //   .then(() => {
    //     console.log("Mongodb connected successfully");
    //   });

<<<<<<< HEAD
    // Connect PostsgreSQL ********
    //   `INSERT INTO test_user values(${insertDoc.id},'${insertDoc.fname}', '${insertDoc.lname}', '${insertDoc.email}', '${insertDoc.password}')`
    // const users = await postgreSQL.myData.query(
    //   `SELECT * from users where user_id='6103111001'`
    // );
    // console.log(users.rows[0]);

=======
>>>>>>> main
    await app.listen(config.port);
    console.log(`app is listening on port ${config.port}`);

    
     const users = await postgreSQL.myData.query(
       `SELECT * from users where user_id='6103111001'`
       //   `INSERT INTO test_user values(${insertDoc.id},'${insertDoc.fname}', '${insertDoc.lname}', '${insertDoc.email}', '${insertDoc.password}')`
     );
     console.log(users.rows[0]);
  } catch (err) {
    throw err;
  }
};

startApp();
