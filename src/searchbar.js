// searchbar.js
import { displayProjectsOnSidebar } from "./sidebar-projectlinks";

export function createSearchBar(content, projectHub) {
    let items = projectHub.getProjects();

    function searchBarLogic(items, searchContent) {
        displayProjectsOnSidebar(items.filter((item) => item.includes(searchContent)));
    }

    // create div for sidebar
    // const sidebarDiv = document.createElement("div");
    // sidebarDiv.classList.toggle("sidebar");
    // content.appendChild(sidebarDiv);

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
    input.placeholder = "Search Projects";

    form.appendChild(input);
    formDiv.appendChild(form);
    sidebarDiv.appendChild(formDiv);

    // initial display of projects
    displayProjectsOnSidebar(items, sidebarDiv);
    

    input.addEventListener("keyup", () => {
        if (input.value.length >= 1) {
            searchBarLogic(items, input.textContent);
        }
    })

}