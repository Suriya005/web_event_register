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
}

module.exports = {
    userRoutes
}