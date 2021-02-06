const http = require('http');

http.createServer(function (req, res) {
    console.log(req.url);
}).listen(3000)
console.log("server 3 is on");