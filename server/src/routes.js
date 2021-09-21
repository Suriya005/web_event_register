const controllers = require("./controllers");
const hooks = require("./hooks");

const userRoutes = (app) => {
  // Postsgre SQL routes
  app.get("/users",{ preHandler: [hooks.auth.validateTokenAdmin] },controllers.pg_users.getUsers);
  app.get("/pgusers/:userId", { preHandler: [hooks.auth.validateToken] },controllers.pg_users.getUserById);
  app.post("/reg", controllers.pg_users.postUser);
  app.patch("/users", controllers.pg_users.updateUser);
  // app.delete("/users", controllers.pg_users.deleteUser);
  app.post("/login", controllers.pg_users.postUserLogin);

  app.post("/reg-event", controllers.reg_event.InsertRegisterEvent);

  // test
  app.post("/apitest", (req, res) => {
    const { body } = req;
    res.send(body);
  });
  app.get("/", (req, res) => {
    res.send("node is work");
  });
};

module.exports = {
  userRoutes,
};
