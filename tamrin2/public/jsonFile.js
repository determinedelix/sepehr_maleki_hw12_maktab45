function read(a, b) {
    let mergedUsers = [];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i].uid === b[j].uid) {
                mergedUsers[i] = { ...a[i], ...b[j] };
            }
        }
    }
    return mergedUsers
}


var xhttp1 = new XMLHttpRequest();
xhttp1.open("GET", "https://api.jsonbin.io/b/5fedd606fd076e704db052ac", false);
xhttp1.send();
console.log(JSON.parse(xhttp1.responseText));

var xhttp2 = new XMLHttpRequest();
xhttp2.open("GET", "https://api.jsonbin.io/b/5fedd646a7377d703920ddf0", false);
xhttp2.send();
console.log(JSON.parse(xhttp2.responseText));

let final_result =read(JSON.parse(xhttp1.response),JSON.parse(xhttp2.response))
console.log(final_result);

lst_new = []
for (let i = 0; i < final_result.length; i++) {
    lst_new.push(Object.values(final_result[i]))
}
//console.log(lst_new);

let counter = 0;
/////Add rows to table
for (let i = 0; i < lst_new.length; i++) {
    counter = counter + 1
    lst_new[i].unshift(counter)
}

var table1 = document.createElement("table");
document.body.appendChild(table1);
head_list = ["Row", "UID", "Firstname", "Lastname","Postion","City"];

var trr = document.createElement("tr");
table1.appendChild(trr);
for (let i = 0; i < head_list.length; i++) {
    var thh = document.createElement("th");
    trr.appendChild(thh);
    thh.innerHTML = head_list[i];
    thh.className = "head_background"
}

for (let j = 0; j < lst_new.length; j++) {
    var trr = document.createElement("tr");
    table1.appendChild(trr);
    for (let i = 0; i < lst_new[j].length; i++) {
        if (j % 2 === 0) {
            let tdd = document.createElement("td")
            trr.appendChild(tdd)
            tdd.innerHTML = lst_new[j][i]
            tdd.className = "zoj_boxes"
        }
        else {
            let tdd = document.createElement("td")
            trr.appendChild(tdd)
            tdd.innerHTML = lst_new[j][i]
            tdd.className = "fard_boxes"
        }

    }
}



// var xhttp1 = new XMLHttpRequest();
// xhttp1.open("GET", "https://api.jsonbin.io/b/5fedd606fd076e704db052ac", false);
// xhttp1.send();
// console.log(JSON.parse(xhttp1.responseText));

// let answer = document.createElement("div")
// document.body.appendChild(answer)
// answer.innerHTML = xhttp1.responseText