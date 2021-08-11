const Fastify = require('fastify');

const buildApp = (options = {}) => {
    const app = Fastify();

    app.get('/', async(req, res) =>{
        res.send('OK')
    })

    return app
}

module.exports = buildApp;