// selectors

var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

// Event Handlers

todoButton.onclick = createList;
todoList.onclick = checkdelete;

// Functions

function createList(e) {
    e.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;

    newDiv.appendChild(newLi);

    var checkbtn = document.createElement("button");
    checkbtn.classList.add("check-btn");
    checkbtn.innerHTML = '<li class="fa fa-check"></li>';

    newDiv.appendChild(checkbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<li class="fa fa-trash"></li>';

    newDiv.appendChild(deletebtn);

    todoList.appendChild(newDiv);
}

function checkdelete(e) {
    var item = e.target;

    if(item.classList[0]==="delete-btn") {
        var parent = item.parentNode;
        parent.remove();
    }

    if(item.classList[0]==="check-btn") {
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    }
}