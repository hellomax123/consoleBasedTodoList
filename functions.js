// JavaScript Functions Code
function addTodo(todo, todoList) {
    todoList.push(todo);
    return todoList[todoList.indexOf(todo)]
}

function removeTodo(todo, todoList) {
    let index = todoList.indexOf(todo);
    if (todoList.indexOf(todo) === -1) {
        console.log(`Can't Remove cause no todo like - ${todo}`)
    } else {
        todoList.splice(index, 1);
    }
}

function viewTodo(todoList) {
    if (todoList.length === 0) {
        console.log("No todos found!!!")
    } else {
        todoList.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`)
        })
    }
}

function quit() {
    console.log("PLS CLOSE THE ALERT BOX (CLICK THE CANCEL BUTTON!!!)")
    window.close();
}

function siteLogic(user, todoList) {
    if (user.toLowerCase() === "add") {
        let newTodo = prompt("Whats the new todo?");
        addTodo(newTodo, todoList)
        console.log(`"${newTodo}" is added in the todo list.`)
    } else if (user.toLowerCase() === "remove") {
        let removeItem = prompt("Enter the todo you wanna remove.")
        removeTodo(removeItem, todoList);
        console.log(`"${removeItem}" is removed from the todo list.`)
    } else if (user.toLowerCase() === "view") {
        viewTodo(todoList);
    } else if (user.toLowerCase() === "quit") {
        quit();
    } else{
        console.log("COMMAND ERROR: Command doesn't means anything here boy!!!.")
    }
}