const Fastify = require('fastify');
const routes = require('./routes')

const buildApp = (options = {}) =>{
    const app = Fastify(options);

    routes.userRoutes(app) //เรียก Router
    return app
}

module.exports = buildApp