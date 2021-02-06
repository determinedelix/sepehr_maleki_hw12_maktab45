// // document.getElementById("userName").value = "hello"
// // let x  = document.createElement("div")
// // x.innerHTML = "extra chamce"
// // x.className = "mioo"
// // document.body.append(x)

// //console.log(document.getElementById("userName").value);


function enter_func() {
    let nameList = []
    let ourUsername = document.getElementById("userName").value
    nameList.push(ourUsername)
    let ourPassword = document.getElementById("passWord").value
    nameList.push(ourPassword)
    // console.log(nameList);
}


$(document).ready(function () {
    $("#enter_button").click(function () {
        let nameList = []
        let ourUsername = document.getElementById("userName").value
        nameList.push(ourUsername)
        let ourPassword = document.getElementById("passWord").value
        nameList.push(ourPassword)
        // console.log(nameList);
        $.post("/login",
            {
                "username": ourUsername,
                "password": ourPassword
            }
           );
    });
});

