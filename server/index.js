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

    await app.listen(config.port);
    console.log(`app is listening on port ${config.port}`);

    const users = await postgreSQL.myData.query("SELECT * FROM test_user");
    console.log(users.rows);
  } catch (err) {
    throw err;
  }
};

startApp();
