const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
    if (req.url === '/' && req.method === "GET") {
        res.setHeader('Content-type', 'text/html')
        fs.readFile('./public/index.html', 'utf8', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                res.write(page)
                res.end()
            }
        })
    }

    else if(req.url === '/jsonFile.js' && req.method === 'GET'){
        fs.readFile('./public/jsonFile.js', 'utf8' , (err,page)=>{
            if(err){
                console.log(err.message);
            }
            else{
                res.write(page)
                res.end()
            }
        })

    }

    else if(req.url === '/jsonFile.css' && req.method === 'GET'){
        fs.readFile('./public/jsonFile.css', 'utf8' , (err,page)=>{
            if(err){
                console.log(err.message);
            }
            else{
                res.write(page)
                res.end()
            }
        })

    }
    else{
        res.write("NOT FOUND 404")
        res.end()
    }
}).listen(5005)
console.log('server 2 is on');



