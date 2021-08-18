const controllers = require('./controllers')
const hooks = require('./hooks')

const userRoutes = (app) => {
    // Mongo DB routes
    app.get('/users',{preHandler:[hooks.auth.validateToken]}, controllers.users.getUsers)
    app.get('/users/:userId', controllers.users.getUserById)
    app.post('/users', controllers.users.postUser)
    app.patch('/users', controllers.users.patchUser)
    app.delete('/users', controllers.users.deleteUser)
    app.post('/login', controllers.users.postUserLogin)

    // Postsgre SQL routes
    app.get("/pgusers", controllers.pg_users.getUsers);
    // app.get("/pgusers/:userId", controllers.pg_users.getUserById);
    app.post("/pgusers", controllers.pg_users.postUser);
    // app.patch("/pgusers", controllers.pg_users.patchUser);
    app.delete("/pgusers", controllers.pg_users.deleteUser);
    // app.post("/pglogin", controllers.pg_users.postUserLogin);

    // test
    app.post("/apitest", (req,res)=>{
        const {body} = req
        res.send(body)
        // console.log(body)
    });
    app.get('/',(req,res)=>{
        res.send('node is work')
    })
}

module.exports = {
    userRoutes
}