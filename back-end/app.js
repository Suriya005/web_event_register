const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log('inside server');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('hello world!');
})

server.listen(port, hostname, () =>{
    console.log(`listening on port ${port}`);
});