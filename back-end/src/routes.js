const userRoutes = (app) => {
    app.get('/user', async (req, res) => {
        res.send('GET USER')
    })
}

module.exports = {
    userRoutes
}