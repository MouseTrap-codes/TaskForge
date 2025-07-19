// sidebar.js
import { createSearchBar } from "./searchbar.js";
import { selectProject } from "./sidebar-projectlinks";

export function createSidebar(currProject, projectHub) {
    let currentProject = currProject; // current project we are on

    const content = document.querySelector(".content");

    let projectsOnSidebar = projectHub.getProjects();
    
    // create div for sidebar
    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.add("sidebar");
    content.appendChild(sidebarDiv);

    // logic for creating a new project

    // create searchbar
    // also dynamically creates projects to be displayed on searchbar
    createSearchBar(sidebarDiv, projectsOnSidebar);

    // event listener for getting current project
    selectProject((projectName) => {
        const prevCurrProject = document.querySelector(".current-project");
        prevCurrProject.classList.toggle("current-project");
        currentProject = projectName;
        e.target.classList.add("current-project");
        // createSearchBar(content, projectsOnSidebar); // rerender everything
    })

    return currentProject;
}
