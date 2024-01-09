const mainContainer = document.getElementById("main");
const listContainer = document.getElementById("list-container");
const addTaskButtonDiv = document.getElementById("add-task-button-div");
const addTaskPopup = document.getElementById("add-task-popup");

export function loadHomeList() {
   const homeHeader = document.createElement("h1");
   homeHeader.classList.add("list-title");
   homeHeader.innerHTML = "Home";

   mainContainer.innerHTML = '';
   mainContainer.appendChild(homeHeader);
   mainContainer.appendChild(listContainer);
   mainContainer.appendChild(addTaskButtonDiv);
   mainContainer.appendChild(addTaskPopup);
}

export function loadTodayList() {
   const todayHeader = document.createElement("h1");
   todayHeader.classList.add("list-title");
   todayHeader.innerHTML = "Today";

   mainContainer.innerHTML = '';
   mainContainer.appendChild(todayHeader);
   mainContainer.appendChild(listContainer);
   mainContainer.appendChild(addTaskButtonDiv);
   mainContainer.appendChild(addTaskPopup);
}