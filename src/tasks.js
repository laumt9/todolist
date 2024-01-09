const mainContainer = document.getElementById("main");
const listContainer = document.getElementById("list-container");

const addTaskForm = document.getElementById("add-task-form");
const formTitle = document.getElementById("form-title");
const formDescription = document.getElementById("form-description");
const formDueDate = document.getElementById("form-due-date");
const formPriority = document.getElementById("form-priority");

export default class Tasks {
   constructor(title, description, dueDate, priority) {
      this.title = title
      this.dueDate = dueDate
      this.description = description
      this.priority = priority
   }
}

// export function addTask (title, description, dueDate, priority, taskIndex) {
//    const task = new Task (title, description, dueDate, priority, taskIndex);

// }

export function renderTaskDisplay() {
   const taskContainer = document.createElement("div");
   taskContainer.classList.add("task-container");

   const leftTask = document.createElement("div");
   leftTask.classList.add("left-task");

   const taskCircleIcon = document.createElement("i");
   taskCircleIcon.classList.add("task-circle", "fa-regular", "fa-circle");

   const taskTitle = document.createElement("p");
   taskTitle.classList.add("task-title");
   taskTitle.innerHTML = formTitle.value;

   const rightTask = document.createElement("div");
   rightTask.classList.add("right-task");

   const taskPriority= document.createElement("div");
   taskPriority.classList.add("task-priority");
   taskPriority.innerHTML = formPriority.value;

   const taskDueDate = document.createElement("div");
   taskDueDate.classList.add("task-due-date");
   taskDueDate.innerHTML = formDueDate.value;

   const taskButtons = document.createElement("div");
   taskButtons.classList.add("task-buttons");
   
   const taskEdit = document.createElement("button");
   taskEdit.classList.add("task-edit");
   const taskEditIcon = document.createElement("i");
   taskEditIcon.classList.add("task-edit-icon", "fa-regular", "fa-pen-to-square");

   const taskCancel = document.createElement("button");
   taskCancel.classList.add("task-cancel");
   const taskCancelIcon = document.createElement("i");
   taskCancelIcon.classList.add("task-cancel-icon", "fa-solid", "fa-xmark");

   taskEdit.appendChild(taskEditIcon);
   taskCancel.appendChild(taskCancelIcon);

   taskButtons.appendChild(taskEdit);
   taskButtons.appendChild(taskCancel);

   rightTask.appendChild(taskPriority);
   rightTask.appendChild(taskDueDate);
   rightTask.appendChild(taskButtons);

   leftTask.appendChild(taskCircleIcon);
   leftTask.appendChild(taskTitle);

   taskContainer.appendChild(leftTask);
   taskContainer.appendChild(rightTask);

   listContainer.appendChild(taskContainer);
}

export function addTask() {
   if (formTitle.value === '') {
      alert("You must include a title!");
   } else {
      renderTaskDisplay();
      addTaskForm.reset();
   }
}