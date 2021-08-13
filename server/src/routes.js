const controllers = require('./controllers')

const userRoutes = (app) => {
    app.get('/users', controllers.users.getUsers)
    app.get('/users/{userId}', controllers.users.getUserById)
    app.post('/users', controllers.users.postUser)
    app.patch('/users/{userId}', controllers.users.patchUser)
    app.delete('/users/{userId}', controllers.users.deleteUser)
}

module.exports = {
    userRoutes
}