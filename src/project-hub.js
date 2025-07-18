import { Project } from "./project.js";
import { todoItem }  from "./todo-item.js"
import { query } from "./query-utils.js";
import { orderBy } from "./order-by.js";

export function ProjectManager() {
    projectList = [];

    const addProject = function(newProjectName) {
        projectToAdd = Project(newProjectName);
        projectList.push(projectToAdd);
    }

    const getProjects = function() {
        return projectList;
    }

    function queryProjects(queryCriteria) {
        params = ["projectName"];
        return query(projectList, params, queryCriteria);
    }

    function orderProjectsBy(field) {
        const projectFieldList = ["projectName"];
        projectList = orderBy(projectList, field, projectFieldList);
    }

    function orderTodos(field) {
        const projectFieldList = ["dueDate", "priority"];
        todoItemsList = orderBy(todoItemsList, field, projectFieldList);
    }


    return {
        addProject,
        getProjects
    }
}