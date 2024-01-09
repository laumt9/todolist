let projects = [];

export default class Project {
   constructor(title) {
      this.title = title
      this.tasks = []
   }
}

export function renderProjectDisplay() {
   const projectsContainer = document.getElementById("projects-added-container");
   const addProjectInput = document.getElementById("add-project-input").value;

   const newProject = document.createElement("li");
   newProject.classList.add("project-added");

   const projectIcon = document.createElement("i");
   projectIcon.classList.add("icon", "fa-solid", "fa-screwdriver-wrench", "fa-lg");

   const projectTitle = document.createElement("p");
   projectTitle.classList.add("project-title");
   projectTitle.innerHTML = `${addProjectInput}`;

   newProject.appendChild(projectIcon);
   newProject.appendChild(projectTitle);

   projectsContainer.appendChild(newProject);
}