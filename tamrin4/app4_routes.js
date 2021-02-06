/// first step to create http sever
const fs = require('fs')
const http = require('http')




http.createServer(function (request, response) {
    // root, get
    if (request.url === "/" && request.method === "GET") {
        response.setHeader('Content-type', 'text/html')// in this state not that important//ta begim response az no html ast we use this line
        fs.readFile('./public/index.html', 'utf8', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })

    }


    else if (request.url === "/about" && request.method === "GET") {
        fs.readFile("./public/about.html", 'utf8', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }

    else if (request.url === "/suggest" && request.method === "GET") {
        fs.readFile("./public/suggest.html", 'utf8', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }

    else if (request.url === "/users" && request.method === "GET") {
        fs.readFile("./public/users.html", 'utf8', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }

    else if (request.url === "/address" && request.method === "GET") {
        fs.readFile("./public/address.html", 'utf8', (err, page) => {
            if (err) {
                console.log(err.message);
            }
            else {
                response.write(page)
                response.end()
            }
        })
    }

    



    else {
        response.write("NOT FOUND 404")
        response.end()
    }

}).listen(5005)

console.log("sever 4 is on!!");