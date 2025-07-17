// todo: complete query and order
import { query } from "./query-utils.js";

export function Project(projectName) {
    let name = projectName;
    let todoItemsList = [];
    let priorities = [low, medium, high];
    let criteria = ["name", ]

    function addTodo(todoItem) {
        if (todoItem.getProject() === name) {
            todoItemsList.push(todoItem);
        }
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
        return query(todoItemsList, queryParams, queryCriteria)

        return relevantTodos;
    }


    function showOnlyIncomplete() {
        relevantTodos = [];
        todoItemsList.forEach((todoItem) => {
            if (todoItem.getPriority() === priority) {
                relevantTodos.push(todoItem)
            }
        });

        return relevantTodos;
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
