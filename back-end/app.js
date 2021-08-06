const express = require("express");
const index_router = require("./index");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.use(cors());
app.use(express.json());
app.use("/", index_router);


app.listen(4000, () => {
  console.log("listening on port 4000");
});
