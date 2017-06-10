const http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello everyone');
});

server.listen(3010, '127.0.0.1');
console.log('Listening to port 3010');