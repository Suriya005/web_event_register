const Fastify = require('fastify');
const routes = require('./routes');


const buildApp = (options = {}) =>{
    const app = Fastify(options);

    routes.userRoutes(app) 

    app.register(require("fastify-cors"), { origin: "*" });

    return app
}

module.exports = buildApp