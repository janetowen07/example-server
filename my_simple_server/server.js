const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
    // res.end('Hello everyone');
});

server.listen(3010, '127.0.0.1');
console.log('Listening to port 3010');