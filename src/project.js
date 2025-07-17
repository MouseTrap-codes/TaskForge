// todo: complete query and order
import { query } from "./query-utils.js";

export function Project(projectName) {
    let name = projectName;
    let todoItemsList = [];
    const PRIORITIES = {
        URGENT: "urgent",
        HIGH: "high",
        MEDIUM: "medium",
        LOW: "low"
    }

    function addTodo(todoItem) {
        if (todoItem.getProject() === name) {
            todoItemsList.push(todoItem);
        }
    }

    // orderby function here
    function orderTodos(field) {

    }

    function removeTodo(todoItem) {
        todoItemsList.splice(
            todoItemsList
            .findIndex(todoItem => todoItem === todo),
            1
        )
    }

    function getTodos() {
        return todoItemsList;
    }

    function queryTodos(queryCriteria) {
        params = ["title", "description", "dueDate", "priority"]
        return query(todoItemsList, params, queryCriteria)
    }

    const getName = () => name
    const setName = (newName) => {name = newName};

    return {
        addTodo,
        removeTodo,
        getTodos,
        queryTodos,
        getName,
        setName
    }; 
}
