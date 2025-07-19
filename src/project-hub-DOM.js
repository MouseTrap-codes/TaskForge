// project-hub-DOM.js
import { createSidebar } from "./sidebar";
import { ProjectHub } from "./project-hub";

export function createProjectHub() {
    const projectHub = ProjectHub();
    projectHub.addProject("default");
    let currentProject = projectHub.getProjects()[0]

    // create sidebar
    currentProject = createSidebar(currentProject, projectHub);
}