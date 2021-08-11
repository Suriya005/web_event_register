const Fastify  =require('fastify');
const FastifySwagger = require('fastify-swagger');
const helpers = require('./helper');

const hostname = 'localhost'
const port = 3000

const fastifyApp = Fastify({
    logger : true
})

fastifyApp.register(FastifySwagger, {
    routePrefix : '/documents',
    swagger : {
        info :{
            title : 'Simple',
            description : 'test swagger',
            version : '1.0.0'
        }
    },
    exposeRoute : true,
})



const userRouter = {
    method : 'POST',
    url : '/user', 
    schema : {
        body : {
            username :{
                type : 'string',
            },
            password : {
                type : 'string',
            }
        },
        response : {
            200 : {
                type :'object',
                properties : {
                    userID :  {
                        type : 'string',
                    },
                    username :{
                        type : 'string',
                    },
                }
            }
        }
    },
    handler : async (req, res) => {
        console.log('resquest ->' , req.body)
        const reqBody = {...req.body, mergedObject:true}
        res.send({
            ...reqBody,
            userID: helpers.generateUserId(10)
        })
    }
}

fastifyApp.route(userRouter)

fastifyApp.patch('/users', async (req, res) => {
    res.send('User has been update')
})




fastifyApp.listen(port,hostname,() =>{
    console.log('server listening on port')
})