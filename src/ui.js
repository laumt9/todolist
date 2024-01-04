// Functions

   // Load home to do list

   // Load today to do list

// Buttons and Event Listeners
const homeList = document.getElementById("home-list-button");
homeList.addEventListener("click", () => {
   console.log("Home")
})

const todayList = document.getElementById("today-list-button");
todayList.addEventListener("click", () => {
   console.log("Today")
})

const projectPopupDiv = document.getElementById("add-project-popup");

const addProjectButton = document.getElementById("add-project-button");
addProjectButton.addEventListener("click", () => {
   projectPopupDiv.classList.add("add-project-popup")
})

const cancelProjectPopup = document.getElementById("popup-button-cancel");
cancelProjectPopup.addEventListener("click", () => {
   projectPopupDiv.classList.remove("add-project-popup")
})

const addTaskButton = document.getElementById("add-task-button");
const addTaskPopup = document.getElementById("add-task-popup");
addTaskButton.addEventListener("click", () => {
   addTaskPopup.classList.add("add-task-popup")
   console.log("Add Task")
})

const taskButtonCancel = document.getElementById("task-button-cancel");
taskButtonCancel.addEventListener("click", () => {
   addTaskPopup.classList.remove("add-task-popup")
})