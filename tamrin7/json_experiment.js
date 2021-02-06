// let res;
// const jsonfile = require('jsonfile')
// const file = './json/data.json'
// jsonfile.readFile(file, function (err, obj) {
//     if (err) console.error(err)
//     res = obj
    
//     console.log(JSON.parse(obj));

// })
const fs = require('fs');
let rawdata = fs.readFileSync('./json/data.json');
let student = JSON.parse(rawdata);
console.log(student);


