/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomeList: () => (/* binding */ loadHomeList),\n/* harmony export */   loadTodayList: () => (/* binding */ loadTodayList)\n/* harmony export */ });\nconst mainContainer = document.getElementById(\"main\");\nconst listContainer = document.getElementById(\"list-container\");\nconst addTaskButtonDiv = document.getElementById(\"add-task-button-div\");\nconst addTaskPopup = document.getElementById(\"add-task-popup\");\n\nfunction loadHomeList() {\n   const homeHeader = document.createElement(\"h1\");\n   homeHeader.classList.add(\"list-title\");\n   homeHeader.innerHTML = \"Home\";\n\n   mainContainer.innerHTML = '';\n   mainContainer.appendChild(homeHeader);\n   mainContainer.appendChild(listContainer);\n   mainContainer.appendChild(addTaskButtonDiv);\n   mainContainer.appendChild(addTaskPopup);\n}\n\nfunction loadTodayList() {\n   const todayHeader = document.createElement(\"h1\");\n   todayHeader.classList.add(\"list-title\");\n   todayHeader.innerHTML = \"Today\";\n\n   mainContainer.innerHTML = '';\n   mainContainer.appendChild(todayHeader);\n   mainContainer.appendChild(listContainer);\n   mainContainer.appendChild(addTaskButtonDiv);\n   mainContainer.appendChild(addTaskPopup);\n}\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_3__.loadHomeList)();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project),\n/* harmony export */   renderProjectDisplay: () => (/* binding */ renderProjectDisplay)\n/* harmony export */ });\nlet projects = [];\n\nclass Project {\n   constructor(title) {\n      this.title = title\n      this.tasks = []\n   }\n}\n\nfunction renderProjectDisplay() {\n   const projectsContainer = document.getElementById(\"projects-added-container\");\n   const addProjectInput = document.getElementById(\"add-project-input\").value;\n\n   const newProject = document.createElement(\"li\");\n   newProject.classList.add(\"project-added\");\n\n   const projectIcon = document.createElement(\"i\");\n   projectIcon.classList.add(\"icon\", \"fa-solid\", \"fa-screwdriver-wrench\", \"fa-lg\");\n\n   const projectTitle = document.createElement(\"p\");\n   projectTitle.classList.add(\"project-title\");\n   projectTitle.innerHTML = `${addProjectInput}`;\n\n   newProject.appendChild(projectIcon);\n   newProject.appendChild(projectTitle);\n\n   projectsContainer.appendChild(newProject);\n}\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   \"default\": () => (/* binding */ Tasks),\n/* harmony export */   renderTaskDisplay: () => (/* binding */ renderTaskDisplay)\n/* harmony export */ });\nconst mainContainer = document.getElementById(\"main\");\nconst listContainer = document.getElementById(\"list-container\");\n\nconst addTaskForm = document.getElementById(\"add-task-form\");\nconst formTitle = document.getElementById(\"form-title\");\nconst formDescription = document.getElementById(\"form-description\");\nconst formDueDate = document.getElementById(\"form-due-date\");\nconst formPriority = document.getElementById(\"form-priority\");\n\nclass Tasks {\n   constructor(title, description, dueDate, priority) {\n      this.title = title\n      this.dueDate = dueDate\n      this.description = description\n      this.priority = priority\n   }\n}\n\n// export function addTask (title, description, dueDate, priority, taskIndex) {\n//    const task = new Task (title, description, dueDate, priority, taskIndex);\n\n// }\n\nfunction renderTaskDisplay() {\n   const taskContainer = document.createElement(\"div\");\n   taskContainer.classList.add(\"task-container\");\n\n   const leftTask = document.createElement(\"div\");\n   leftTask.classList.add(\"left-task\");\n\n   const taskCircleIcon = document.createElement(\"i\");\n   taskCircleIcon.classList.add(\"task-circle\", \"fa-regular\", \"fa-circle\");\n\n   const taskTitle = document.createElement(\"p\");\n   taskTitle.classList.add(\"task-title\");\n   taskTitle.innerHTML = formTitle.value;\n\n   const rightTask = document.createElement(\"div\");\n   rightTask.classList.add(\"right-task\");\n\n   const taskPriority= document.createElement(\"div\");\n   taskPriority.classList.add(\"task-priority\");\n   taskPriority.innerHTML = formPriority.value;\n\n   const taskDueDate = document.createElement(\"div\");\n   taskDueDate.classList.add(\"task-due-date\");\n   taskDueDate.innerHTML = formDueDate.value;\n\n   const taskButtons = document.createElement(\"div\");\n   taskButtons.classList.add(\"task-buttons\");\n   \n   const taskEdit = document.createElement(\"button\");\n   taskEdit.classList.add(\"task-edit\");\n   const taskEditIcon = document.createElement(\"i\");\n   taskEditIcon.classList.add(\"task-edit-icon\", \"fa-regular\", \"fa-pen-to-square\");\n\n   const taskCancel = document.createElement(\"button\");\n   taskCancel.classList.add(\"task-cancel\");\n   const taskCancelIcon = document.createElement(\"i\");\n   taskCancelIcon.classList.add(\"task-cancel-icon\", \"fa-solid\", \"fa-xmark\");\n\n   taskEdit.appendChild(taskEditIcon);\n   taskCancel.appendChild(taskCancelIcon);\n\n   taskButtons.appendChild(taskEdit);\n   taskButtons.appendChild(taskCancel);\n\n   rightTask.appendChild(taskPriority);\n   rightTask.appendChild(taskDueDate);\n   rightTask.appendChild(taskButtons);\n\n   leftTask.appendChild(taskCircleIcon);\n   leftTask.appendChild(taskTitle);\n\n   taskContainer.appendChild(leftTask);\n   taskContainer.appendChild(rightTask);\n\n   listContainer.appendChild(taskContainer);\n}\n\nfunction addTask() {\n   if (formTitle.value === '') {\n      alert(\"You must include a title!\");\n   } else {\n      renderTaskDisplay();\n      addTaskForm.reset();\n   }\n}\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n// Default Lists\nconst homeList = document.getElementById(\"home-list-button\");\nhomeList.addEventListener(\"click\", () => {\n   (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadHomeList)();\n})\n\nconst todayList = document.getElementById(\"today-list-button\");\ntodayList.addEventListener(\"click\", () => {\n   (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadTodayList)();\n})\n\n// Projects\n\nconst projectPopupDiv = document.getElementById(\"add-project-popup\");\n\nconst addProjectButton = document.getElementById(\"add-project-button\");\naddProjectButton.addEventListener(\"click\", () => {\n   projectPopupDiv.classList.add(\"add-project-popup\")\n})\n\nconst cancelProjectPopup = document.getElementById(\"popup-button-cancel\");\ncancelProjectPopup.addEventListener(\"click\", () => {\n   projectPopupDiv.classList.remove(\"add-project-popup\")\n})\n\nconst submitProject = document.getElementById(\"popup-button-add\");\nsubmitProject.addEventListener(\"click\", () => {\n   (0,_projects__WEBPACK_IMPORTED_MODULE_2__.renderProjectDisplay)()\n})\n\n// Tasks \n\nconst addTaskButton = document.getElementById(\"add-task-button\");\nconst addTaskPopup = document.getElementById(\"add-task-popup\");\naddTaskButton.addEventListener(\"click\", () => {\n   addTaskPopup.classList.add(\"add-task-popup\");\n   console.log(\"Add Task Button\");\n})\n\nconst taskButtonCancel = document.getElementById(\"task-button-cancel\");\ntaskButtonCancel.addEventListener(\"click\", () => {\n   addTaskPopup.classList.remove(\"add-task-popup\")\n})\n\nconst taskButtonAdd = document.getElementById(\"task-button-add\");\ntaskButtonAdd.addEventListener(\"click\", () => {\n   addTaskPopup.classList.remove(\"add-task-popup\")\n   ;(0,_tasks__WEBPACK_IMPORTED_MODULE_0__.addTask)();\n})\n\n//# sourceURL=webpack://todolist/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;