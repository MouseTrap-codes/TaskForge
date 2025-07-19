// todo: complete query and order
import { query } from "./query-utils.js";
import { orderBy } from "./order-by.js";

export function Project(projectName) {
    let name = projectName;
    let todoItemsList = [];
   

    function addTodo(todoItem) {
        if (todoItem.getProject() === name) {
            todoItemsList.push(todoItem);
        }
    }

    function orderTodos(field) {
        const todoFieldList = ["dueDate", "priority", "name"];
        todoItemsList = orderBy(todoItemsList, field, todoFieldList);
    }

    function removeTodo(todoItemToRemove) {
        todoItemsList.splice(
            todoItemsList
            .findIndex(todoItem => todoItem === todoItemToRemove),
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
        orderTodos,
        getName,
        setName
    }; 
}
