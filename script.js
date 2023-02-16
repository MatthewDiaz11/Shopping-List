var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var div = document.createElement("div");
    var li = document.createElement("li");
    var del = document.createElement("button");

    div.classList.add("wrapper");
    del.classList.add("delTask");
    del.classList.add("btn");
    del.classList.add("fa");
    del.classList.add("fa-close");

    ul.appendChild(div);
    div.appendChild(li);

    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    div.appendChild(del);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteTask(task) {
    var itemToDelete = "delTask btn fa fa-close"
    if (task.target.className === itemToDelete) {
        task.target.parentElement.remove();
    }
}

function doneTask(task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("done");
    }
}

function handleUIClick(element) {
    deleteTask(element);
    doneTask(element);
}

ul.addEventListener("click", handleUIClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);