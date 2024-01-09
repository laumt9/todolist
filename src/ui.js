import { addTask , renderTaskDisplay } from "./tasks";
import { loadHomeList , loadTodayList } from "./dom";
import { renderProjectDisplay } from "./projects";

// Default Lists
const homeList = document.getElementById("home-list-button");
homeList.addEventListener("click", () => {
   loadHomeList();
})

const todayList = document.getElementById("today-list-button");
todayList.addEventListener("click", () => {
   loadTodayList();
})

// Projects

const projectPopupDiv = document.getElementById("add-project-popup");

const addProjectButton = document.getElementById("add-project-button");
addProjectButton.addEventListener("click", () => {
   projectPopupDiv.classList.add("add-project-popup")
})

const cancelProjectPopup = document.getElementById("popup-button-cancel");
cancelProjectPopup.addEventListener("click", () => {
   projectPopupDiv.classList.remove("add-project-popup")
})

const submitProject = document.getElementById("popup-button-add");
submitProject.addEventListener("click", () => {
   renderProjectDisplay()
})

// Tasks 

const addTaskButton = document.getElementById("add-task-button");
const addTaskPopup = document.getElementById("add-task-popup");
addTaskButton.addEventListener("click", () => {
   addTaskPopup.classList.add("add-task-popup");
   console.log("Add Task Button");
})

const taskButtonCancel = document.getElementById("task-button-cancel");
taskButtonCancel.addEventListener("click", () => {
   addTaskPopup.classList.remove("add-task-popup")
})

const taskButtonAdd = document.getElementById("task-button-add");
taskButtonAdd.addEventListener("click", () => {
   addTaskPopup.classList.remove("add-task-popup")
   addTask();
})