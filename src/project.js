import { todoItem } from "./todo-item.js";

export function Project(projectName) {
    let name = projectName;
    let todoItemsList = [];

    function addTodo(todoItem) {
        if (todoItem.getProject() === name) {
            todoItemsList.push(todoItem);
        }
    }

    function getTodos() {
        return todoItemsList;
    }

    const getName = () => name
    const setName = (newName) => {name = newName};

    return {
        addTodo,
        getTodos
    }; 
}
