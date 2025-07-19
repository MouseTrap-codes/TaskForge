// sidebar-projectlinks.js
export function displayProjectsOnSidebar(projectList, content) {
    const alreadyDisplayed = content.querySelector(".project-list");
    if (alreadyDisplayed) {
        alreadyDisplayed.remove();
    }
    const projects = document.createElement("div");
    projects.classList.toggle("project-list");
    for (const project of projectList) {
        const div = document.createElement("div");
        div.classList.toggle("project");
        div.textContent = project;
        projects.appendChild(div);
    }
    content.appendChild(projects);
}

export function selectProject(onSelect) {
  document.addEventListener("click", (e) => {
    const target = e.target.closest(".project");
    if (!target) return;           // click was outside any project div
    onSelect(target.textContent);  // notify the rest of the app
  });
}