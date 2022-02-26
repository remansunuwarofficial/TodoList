// to show all todo calling function here
showTodo()
const add = document.getElementById("add");
add.addEventListener("click", (e) => {
    let title = document.getElementById("title");
    let description = document.getElementById("description");

    let todoObject = {
        title: title.value,
        description: description.value
    }

    let todoArray;

    let todos = localStorage.getItem("todos")

    if (todos === null) {
        todoArray = []
    } else {
        todoArray = JSON.parse(todos);
    }

    todoArray.push(todoObject)

    localStorage.setItem("todos", JSON.stringify(todoArray))
    title.value = "";

    description.value = "";
    showTodo()
    e.preventDefault()

})

function showTodo() {
    let todos = localStorage.getItem("todos")

    if (todos === null) {
        todoArray = []
    } else {
        todoArray = JSON.parse(todos);
    }
    let uiString = '';

    todoArray.forEach((e, i) => {
        uiString += `<tr>
                <th scope="row">${i}</th>
                <td>${e.title}</td>
                <td>${e.description}</td>
                <td>
                    <button class="btn btn-danger" id="${i}" onclick="deleteTodo(this.id)">Delete</button>
                </td>
              </tr>`;

      
    })
    
    let appendTodo = document.getElementById("appendTodo");
    if (todoArray.length == 0) {
        appendTodo.innerHTML = "<h1>Nothing to Show</h1>"

    } else {
        appendTodo.innerHTML = uiString;

    }

}

function deleteTodo(index) {
    let todos = localStorage.getItem("todos")

    if (todos === null) {
        todoArray = []
    } else {
        todoArray = JSON.parse(todos);
    }
    todoArray.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(todoArray))
    showTodo()

}