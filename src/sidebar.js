import { createSearchBar } from "./searchbar-logic.js";

export function sideBarDom(currentProject, projectHub) {
    const content = document.querySelector(".content");

    let projectsOnSidebar = projectHub.getProjects();
    
    // create div for sidebar
    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.toggle("sidebar");

    // logic for creating a new project

    // create searchbar
    createSearchBar(content, projectsOnSidebar);
}
