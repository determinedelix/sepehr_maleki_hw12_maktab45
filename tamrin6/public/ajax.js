let container = document.createElement("div")
document.body.append(container)
container.className = "container"

let url_holder = document.createElement("input")
url_holder.placeholder = "URL holder"
container.append(url_holder)

url_holder.id = "url"

let select1 = document.createElement("select")
select1.id = "myselect"
container.append(select1)

let selection = document.createElement("option")
selection.innerText = "Select"
selection.id = "selection"
select1.append(selection)

let first_button = document.createElement("option")
first_button.innerText = "GET"
first_button.id = "get_it"
select1.append(first_button)

let second_button = document.createElement("option")
second_button.innerText = "POST"
second_button.id = "post_it"
select1.append(second_button)

let submit = document.createElement("button")
submit.innerText = "submit"
submit.id = "submit_it"
container.append(submit)

let a = document.createElement("p") ////a is to save determine GET or POST
a.id = "bin"

let request = document.createElement("input")
request.placeholder = "Enter Your request and submit!"
request.id = "request"

let print_result = document.createElement("div");

let statu = document.createElement("p"); ///200 or 201 and JSON format
statu.id = "statu1"

let response_body = document.createElement("div")

let error_json = document.createElement("p");
error_json.id = "error"


document.getElementById("myselect").onchange = function () { myFunction() };

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


function myFunction() {
    container.append(a)

    var val = document.getElementById('myselect').value;
    url_holder.innerText = val
    a.innerText = val

    if (val === "GET") {
        request.remove()
        print_result.remove()
        statu.remove()
        response_body.remove()
        error_json.remove()

        submit.onclick = function () {
            var xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    response_body.innerText = "Response body:"
                    container.append(response_body)
                    container.append(print_result)
                    print_result.id = "result"
                    console.log(this.response);
                    print_result.innerText = this.response
                    statu.innerText = `Statu is ${this.status}, Plain Text:JSON.`
                    container.append(statu)
                };
            };
            xhttp1.open("GET", url_holder.value.toString());
            xhttp1.send();
        }
    }
    else if (val === "POST") {

        container.append(request)
        print_result.remove()
        statu.remove()
        response_body.remove()
        // error_json.remove()


        submit.onclick = function () {
            var xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 201) {
                    response_body.innerText = "Response body:"
                    container.append(response_body)
                    container.append(print_result)
                    print_result.id = "result"
                    console.log(this.response);
                    print_result.innerText = this.response
                    statu.innerText = `Statu is ${this.status} , Plain Text:JSON.`
                    container.append(statu)


                };
            };

            xhttp1.open("POST", url_holder.value.toString());
            xhttp1.setRequestHeader("Content-Type", "application/json");

            if (IsJsonString(request.value) === true) {
                error_json.remove()
                xhttp1.send(request.value);
            }

            else {
                print_result.remove()
                statu.remove()
                response_body.remove()
                error_json.innerText = "Format is not JSON! Change it fast"
                container.append(error_json)
            }
        }
    }

    else {
        a.innerText = "Please select POST OR GET."
    }


}