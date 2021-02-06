const fs = require('fs');
const http = require('http');

http.createServer(function(req,res){
    if(req.url ==='/' && req.method ==='GET'){
        res.setHeader('Content-type','text/html')//
        fs.readFile('./public/index.html','utf8',(err,page)=>{
            if(err){
                console.log(err.message);
            }
            else{
                res.write(page)
                res.end()
            }
        })
    }
}).listen(5005)
console.log("server1 is on");