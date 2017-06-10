const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello everyone');
});

let myReadStream = fs.createReadStream(__dirname + '/users.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/users2.txt');

myReadStream.on('data', function(chunk) {
    console.log('new chunk received');
    console.log(chunk);
    myWriteStream.write(chunk);
});



server.listen(3010, '127.0.0.1');
console.log('Listening to port 3010');