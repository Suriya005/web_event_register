const buildApp = require('./src/app');
const config = require('./src/config')
const mongooes = require('mongoose')

const uri = 'mongodb+srv://admin:10qYWbTiI2Q4BDMW@cluster0.fwaph.mongodb.net/test?retryWrites=true&w=majority'

 const startApp = async () => {
    const appOptions = {
        logger: true
    }
    const app = buildApp(appOptions);

    try {
        await app.listen(config.port)
        console.log(`app is listening on port ${config.port}`)

        await mongooes.connect(uri, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology:true
        });

        console.log('Database connected successfully')
    } catch (err) {
        throw err
    }
    
}

startApp()