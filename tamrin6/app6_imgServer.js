
const fs = require('fs')
const http = require('http')

http.createServer(function (request, response) {
 
    if (request.url === "/" && request.method === "GET") {
        // response.setHeader('Content-type', 'image/png')
        response.setHeader('Content-type', 'text/html')
        fs.readFile('./public/index.html','utf8', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }   
    ///////////////////////////////        picture sharing
    else if (request.url === "/las_vegas.png" && request.method === "GET") {
        response.setHeader('Content-type', 'image/png')
        fs.readFile('./public/las_vegas.png', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }
    ///////////////////////////////picture sharing
  
    else if (request.url === "/style.css" && request.method === "GET") {
        response.setHeader('Content-type', 'text/css')
        fs.readFile('./public/style.css', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }
    else if (request.url === "/ajax.js" && request.method === "GET") {
        response.setHeader('Content-type', 'text/js')
        fs.readFile('./public/ajax.js', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }
    else if (request.url === "/ajax.css" && request.method === "GET") {
        response.setHeader('Content-type', 'text/css')
        fs.readFile('./public/ajax.css', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }

}).listen(5005)
console.log("server 6 is on");


//////////
// var mime = {
//     html: 'text/html',
//     txt: 'text/plain',
//     css: 'text/css',
//     gif: 'image/gif',
//     jpg: 'image/jpeg',
//     png: 'image/png',
//     svg: 'image/svg+xml',
//     js: 'application/javascript'
// };
///////////


///////////
// fs = require('fs');
// http = require('http');
// url = require('url');


// http.createServer(function (req, res) {
//     var request = url.parse(req.url, true);
//     var action = request.pathname;

//     if (action == '/eye.jpeg') {
//         var img = fs.readFileSync('./public/eye.jpeg');
//         res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//         res.end(img, 'binary');
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello World \n');
//     }
// }).listen(8080, '127.0.0.1');
// console.log("server 6 is on");

/// first step to create http sever
////////////////