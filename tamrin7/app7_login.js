const fs = require('fs');
const http = require('http')
var querystring = require('querystring');

const jsonfile = require('jsonfile');
const { userInfo } = require('os');
const file = './json/data.json'

function processPost(req, res, callback) {
    var queryData = "";
    if(typeof callback !== 'function') return null;

    if(req.method == 'POST') {
        req.on('data', function(data) {
            queryData += data;
            if(queryData.length > 1e6) {
                queryData = "";
                res.writeHead(413, {'Content-Type': 'text/plain'}).end();
                req.connection.destroy();
            }
        });

        req.on('end', function() {
            req.post = querystring.parse(queryData);
            callback();
        });

    } else {
        res.writeHead(405, {'Content-Type': 'text/plain'});
        res.end();
    
}
}

http.createServer(function (req, res) {

    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-type', 'text/html')
        fs.readFile('./public/login.html', 'utf8', (err, page) => {
            if (err) {
                console.log(err);
            }
            else {
                res.write(page)
                res.end()

            }
        })
    }
    else if (req.url === '/login.css' && req.method === 'GET') {
        res.setHeader('Content-type', 'text/css')
        fs.readFile('./public/login.css', 'utf8', (err, page) => {
            if (err) {
                console.log(err);
            }
            else {
                res.write(page)
                res.end()

            }
        })
    }
    else if (req.url === '/mio.jpg' && req.method === 'GET') {
        res.setHeader('Content-type', 'image/jpg')
        fs.readFile('./public/mio.jpg', (err, page) => {
            if (err) {
                console.log(err);
            }
            else {
                res.write(page)
                res.end()

            }
        })
    }
    else if (req.url === '/getInfo.js' && req.method === 'GET') {
        res.setHeader('Content-type', 'text/js')
        fs.readFile('./public/getInfo.js', (err, page) => {
            if (err) {
                console.log(err);
            }
            else {
                res.write(page)
                res.end()

            }
        })

    }
    else if (req.url === '/login' && req.method === 'POST') {

        
        processPost(req, res, function () {

            fs.readFile('./json/data.json', (err, data) => {
                if (err) throw err;
                let student = JSON.parse(data);
                if(student[0].username === req.post.username){
                    console.log("yes");
                }
                // console.log(student[0].username);
                res.write(student.toString())
                res.end()
            });

            console.log(req.post.username);
            // Use request.post here

            res.writeHead(200, "OK", { 'Content-Type': 'text/plain' });
            
        });

       
    }

}).listen(5005)
console.log("server 7 is on")