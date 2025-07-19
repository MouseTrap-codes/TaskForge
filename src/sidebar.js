import { searchBarLogic } from "./searchbar-logic.js";

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

function createSearchBar(content) {
    // create div for sidebar
    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.toggle("sidebar");

    // logic for creating a new project

    // create searchbar
    const formDiv = document.createElement("div");
    formDiv.classList.toggle("sidebar-searchbar");
    const form = document.createElement("form");
    form.action = "";
    form.method = "get"
    form.classList.toggle("searchbar");
    const input = document.createElement("input");
    input.type = "text";
    input.name = "search";
    input.id = "search";
    input.textContent = "Search Projects";

    form.appendChild(input);
    formDiv.appendChild(form);
    content.appendChild(formDiv);

    input.addEventListener("keyup", () => {
        searchBarLogic(projectHub.getProjects(), input.textContent);
    })

}