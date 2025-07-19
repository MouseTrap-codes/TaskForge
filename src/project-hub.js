import { Project } from "./project.js";
import { query } from "./query-utils.js";
import { orderBy } from "./order-by.js";

export function ProjectHub() {
    let projectList = [];
    let currentProject;
    if (projectList.length >= 1) {
        currentProject = projectList[0];
    }

    const setCurrentProject = function(projectName) {
        if (projectList.includes(projectName)) {
            currentProject = projectName;
        }
    }

    const addProject = function(newProjectName) {
        projectToAdd = Project(newProjectName);
        projectList.push(projectToAdd);
    }

    const getProjects = function() {
        return projectList;
    }

    function queryProjects(queryCriteria) {
        let params = ["projectName"];
        return query(projectList, params, queryCriteria);
    }

    function orderProjectsBy(field) {
        const projectFieldList = ["projectName"];
        projectList = orderBy(projectList, field, projectFieldList);
    }


    return {
        addProject,
        getProjects,
        queryProjects,
        orderProjectsBy,
        setCurrentProject
    }
}