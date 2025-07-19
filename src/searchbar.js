export function searchBarLogic(items, searchContent) {
    items.filter((item) => item.includes(searchContent));
    return items;
}


function createSearchBar(content) {
    function searchBarLogic(items, searchContent) {
        items.filter((item) => item.includes(searchContent));
        return items;
    }
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
        if (input.textContent.length >= 1) {
            searchBarLogic(projectHub.getProjects(), input.textContent);
        }
    })

}