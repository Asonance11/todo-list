/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UIcreators.js":
/*!***************************!*\
  !*** ./src/UIcreators.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddTaskButton": () => (/* binding */ createAddTaskButton),
/* harmony export */   "createDeleteProjectButton": () => (/* binding */ createDeleteProjectButton),
/* harmony export */   "createTodoForm": () => (/* binding */ createTodoForm)
/* harmony export */ });
function createAddTaskButton() {
	let addTaskButton = document.createElement('button');
	addTaskButton.textContent = '+ Add Task';

	return addTaskButton;
}
function createDeleteProjectButton() {
	let deleteProject = document.createElement('button');
	deleteProject.textContent = 'Delete Project';

	return deleteProject;
}

function createTodoForm() {
	let todoForm = document.createElement('form');
	todoForm.setAttribute('class', 'todo-form');
	let todoName = document.createElement('input');
	todoName.setAttribute('class', 'input');
	todoName.setAttribute('type', 'text');
	todoName.setAttribute('id', 'todo-name');
	todoName.setAttribute('required', '');
	todoName.setAttribute('placeholder', 'Task Name');

	let todoLabelContainer = document.createElement('div');
	todoLabelContainer.setAttribute('class', 'label-container');
	let todoLabel = document.createElement('label');
	todoLabel.setAttribute('for', 'todo-isCompleted');
	todoLabel.textContent = `is it completed?`;

	let todoIsCompleted = document.createElement('input');
	todoIsCompleted.setAttribute('type', 'checkbox');
	todoIsCompleted.setAttribute('id', 'todo-isCompleted');
	todoIsCompleted.setAttribute('name', 'taskIsComplete');

	let todoPriority = document.createElement('select');
	todoPriority.setAttribute('name', 'priority');
	todoPriority.setAttribute('class', 'input');
	todoPriority.setAttribute('id', 'todo-prority');
	todoPriority.setAttribute('required', '');
	todoPriority.innerHTML = `
		<option value="" disabled selected hidden>Select Priority</option>
		<option value="low">low</option>
		<option value="medium">medium</option>
		<option value="high">High</option>
	`;

	let todoDate = document.createElement('input');
	todoDate.setAttribute('type', 'date');
	todoDate.setAttribute('class', 'input');
	todoDate.setAttribute('name', 'dueDate');
	todoDate.setAttribute('id', 'todo-date');
	todoDate.setAttribute('required', '');
	todoDate.setAttribute('placeholder', 'Select Due Date');

	let todoSubmit = document.createElement('button');
	todoSubmit.setAttribute('type', 'submit');
	todoSubmit.textContent = `Add`;

	todoLabelContainer.appendChild(todoLabel);
	todoLabelContainer.appendChild(todoIsCompleted);

	todoForm.appendChild(todoName);
	todoForm.appendChild(todoPriority);
	todoForm.appendChild(todoDate);
	todoForm.appendChild(todoLabelContainer);
	todoForm.appendChild(todoSubmit);

	return todoForm;
}


/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectKeeper": () => (/* binding */ ProjectKeeper),
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
class Project {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.tasks = [];
	}
}

class ProjectKeeper {
	static projectArray = [];

	static getAllProjects() {
		return ProjectKeeper.projectArray;
	}

	static addProject(project) {
		return ProjectKeeper.projectArray.push(project);
	}

	static deleteProject(project) {
		return ProjectKeeper.projectArray.splice(
			ProjectKeeper.projectArray.indexOf(project),
			1
		);
	}
}

class ToDo {
	constructor(name, isCompleted, priority, date) {
		this.name = name;
		this.priority = priority;
		this.isCompleted = isCompleted;
		this.date = date;
	}
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _UIcreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIcreators */ "./src/UIcreators.js");
// imports



// global variables
let contentDiv = document.getElementById('content');
// let projectArray = [];
let addProjectBtn = document.getElementById('add-project-button');
let projectForm = document.getElementById('project-form');
let taskForm = (0,_UIcreators__WEBPACK_IMPORTED_MODULE_1__.createTodoForm)();
let currentproject;

// functions
function displayForm() {
	if (projectForm.style.display == 'flex') {
		projectForm.style.display = 'none';
	} else if ((projectForm.style.display = 'none')) {
		projectForm.style.display = 'flex';
	}
}
function handleProjectFormSubmit(e) {
	e.preventDefault();

	projectForm.style.display = 'none';
	let projectFormInput = document.querySelector('#project-name');

	// make new project and add to project keeper
	const newProject = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(projectFormInput.value);
	_classes__WEBPACK_IMPORTED_MODULE_0__.ProjectKeeper.addProject(newProject);

	// UI
	createProjectList();
	projectForm.reset();
}

// function createProjectListItem(project) {

// 	return listItem;
// }
function createProjectList() {
	const projectListContainer = document.querySelector(
		'.project-list-container'
	);

	const projectList = document.createElement('ul');
	projectList.setAttribute('class', 'project-list');

	let allProjects = _classes__WEBPACK_IMPORTED_MODULE_0__.ProjectKeeper.getAllProjects();
	projectListContainer.textContent = '';
	// for (let i = 0; i < allProjects.length; i++) {
	// 	let listItem = document.createElement('li');
	// 	listItem.setAttribute('class', 'project-list-item');
	// 	listItem.textContent = allProjects[i].name;
	// 	projectList.appendChild(listItem);
	// }
	allProjects.forEach((project) => {
		let listItem = document.createElement('li');
		listItem.setAttribute('class', 'project-list-item');
		listItem.textContent = project.name;
		listItem.addEventListener('click', () => {
			currentproject = project;
			handleProjectClick();
		});
		projectList.appendChild(listItem);
	});
	projectListContainer.appendChild(projectList);
}

// haandle project click
function handleProjectClick() {
	contentDiv.textContent = '';
	let contentHeader = document.createElement('div');
	contentHeader.innerHTML = `<h2>${currentproject.name}</h2>`;
	contentDiv.appendChild(contentHeader);
	let addTaskButton = (0,_UIcreators__WEBPACK_IMPORTED_MODULE_1__.createAddTaskButton)();
	let deleteProjectButton = (0,_UIcreators__WEBPACK_IMPORTED_MODULE_1__.createDeleteProjectButton)();
	addTaskButton.addEventListener('click', displayTodoForm);
	contentDiv.appendChild(addTaskButton);
	contentDiv.appendChild(deleteProjectButton);
}

function displayTodoForm() {
	if (taskForm.style.display == 'flex') {
		taskForm.style.display = 'none';
	} else if ((taskForm.style.display = 'none')) {
		taskForm.style.display = 'flex';
		contentDiv.appendChild(taskForm);
	}
}
// event listeners

addProjectBtn.addEventListener('click', displayForm);
projectForm.addEventListener('submit', handleProjectFormSubmit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDbUQ7QUFLN0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQU87QUFDL0IsQ0FBQyw4REFBd0I7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtFQUE0QjtBQUMvQztBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9CQUFvQjtBQUN0RDtBQUNBLHFCQUFxQixnRUFBbUI7QUFDeEMsMkJBQTJCLHNFQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUljcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdXR0b24oKSB7XHJcblx0bGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xyXG5cclxuXHRyZXR1cm4gYWRkVGFza0J1dHRvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVsZXRlUHJvamVjdEJ1dHRvbigpIHtcclxuXHRsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xyXG5cclxuXHRyZXR1cm4gZGVsZXRlUHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtKCkge1xyXG5cdGxldCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHR0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tZm9ybScpO1xyXG5cdGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW5hbWUnKTtcclxuXHR0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBOYW1lJyk7XHJcblxyXG5cdGxldCB0b2RvTGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR0b2RvTGFiZWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbC1jb250YWluZXInKTtcclxuXHRsZXQgdG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHR0b2RvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kby1pc0NvbXBsZXRlZCcpO1xyXG5cdHRvZG9MYWJlbC50ZXh0Q29udGVudCA9IGBpcyBpdCBjb21wbGV0ZWQ/YDtcclxuXHJcblx0bGV0IHRvZG9Jc0NvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0dG9kb0lzQ29tcGxldGVkLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdHRvZG9Jc0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8taXNDb21wbGV0ZWQnKTtcclxuXHR0b2RvSXNDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tJc0NvbXBsZXRlJyk7XHJcblxyXG5cdGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XHJcblx0dG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXQnKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLXByb3JpdHknKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHR0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gYFxyXG5cdFx0PG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5TZWxlY3QgUHJpb3JpdHk8L29wdGlvbj5cclxuXHRcdDxvcHRpb24gdmFsdWU9XCJsb3dcIj5sb3c8L29wdGlvbj5cclxuXHRcdDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5tZWRpdW08L29wdGlvbj5cclxuXHRcdDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG5cdGA7XHJcblxyXG5cdGxldCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZGF0ZScpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWxlY3QgRHVlIERhdGUnKTtcclxuXHJcblx0bGV0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHR0b2RvU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuXHR0b2RvU3VibWl0LnRleHRDb250ZW50ID0gYEFkZGA7XHJcblxyXG5cdHRvZG9MYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGFiZWwpO1xyXG5cdHRvZG9MYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXNDb21wbGV0ZWQpO1xyXG5cclxuXHR0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcclxuXHR0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0xhYmVsQ29udGFpbmVyKTtcclxuXHR0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvU3VibWl0KTtcclxuXHJcblx0cmV0dXJuIHRvZG9Gb3JtO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMudGFza3MgPSBbXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0S2VlcGVyIHtcclxuXHRzdGF0aWMgcHJvamVjdEFycmF5ID0gW107XHJcblxyXG5cdHN0YXRpYyBnZXRBbGxQcm9qZWN0cygpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RLZWVwZXIucHJvamVjdEFycmF5LnNwbGljZShcclxuXHRcdFx0UHJvamVjdEtlZXBlci5wcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KSxcclxuXHRcdFx0MVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb0RvIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBpc0NvbXBsZXRlZCwgcHJpb3JpdHksIGRhdGUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblx0XHR0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XHJcblx0XHR0aGlzLmRhdGUgPSBkYXRlO1xyXG5cdH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydHNcclxuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdEtlZXBlciB9IGZyb20gJy4vY2xhc3Nlcyc7XHJcbmltcG9ydCB7XHJcblx0Y3JlYXRlQWRkVGFza0J1dHRvbixcclxuXHRjcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uLFxyXG5cdGNyZWF0ZVRvZG9Gb3JtLFxyXG59IGZyb20gJy4vVUljcmVhdG9ycyc7XHJcblxyXG4vLyBnbG9iYWwgdmFyaWFibGVzXHJcbmxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuLy8gbGV0IHByb2plY3RBcnJheSA9IFtdO1xyXG5sZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idXR0b24nKTtcclxubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xyXG5sZXQgdGFza0Zvcm0gPSBjcmVhdGVUb2RvRm9ybSgpO1xyXG5sZXQgY3VycmVudHByb2plY3Q7XHJcblxyXG4vLyBmdW5jdGlvbnNcclxuZnVuY3Rpb24gZGlzcGxheUZvcm0oKSB7XHJcblx0aWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XHJcblx0XHRwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH0gZWxzZSBpZiAoKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpKSB7XHJcblx0XHRwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdChlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdGxldCBwcm9qZWN0Rm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xyXG5cclxuXHQvLyBtYWtlIG5ldyBwcm9qZWN0IGFuZCBhZGQgdG8gcHJvamVjdCBrZWVwZXJcclxuXHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdEZvcm1JbnB1dC52YWx1ZSk7XHJcblx0UHJvamVjdEtlZXBlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cclxuXHQvLyBVSVxyXG5cdGNyZWF0ZVByb2plY3RMaXN0KCk7XHJcblx0cHJvamVjdEZvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpc3RJdGVtKHByb2plY3QpIHtcclxuXHJcbi8vIFx0cmV0dXJuIGxpc3RJdGVtO1xyXG4vLyB9XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RMaXN0KCkge1xyXG5cdGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdCcucHJvamVjdC1saXN0LWNvbnRhaW5lcidcclxuXHQpO1xyXG5cclxuXHRjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0cHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWxpc3QnKTtcclxuXHJcblx0bGV0IGFsbFByb2plY3RzID0gUHJvamVjdEtlZXBlci5nZXRBbGxQcm9qZWN0cygpO1xyXG5cdHByb2plY3RMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcblx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG5cdC8vIFx0bGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHQvLyBcdGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1saXN0LWl0ZW0nKTtcclxuXHQvLyBcdGxpc3RJdGVtLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbaV0ubmFtZTtcclxuXHQvLyBcdHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHQvLyB9XHJcblx0YWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0bGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1saXN0LWl0ZW0nKTtcclxuXHRcdGxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cdFx0bGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGN1cnJlbnRwcm9qZWN0ID0gcHJvamVjdDtcclxuXHRcdFx0aGFuZGxlUHJvamVjdENsaWNrKCk7XHJcblx0XHR9KTtcclxuXHRcdHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHR9KTtcclxuXHRwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbi8vIGhhYW5kbGUgcHJvamVjdCBjbGlja1xyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2xpY2soKSB7XHJcblx0Y29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xyXG5cdGxldCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29udGVudEhlYWRlci5pbm5lckhUTUwgPSBgPGgyPiR7Y3VycmVudHByb2plY3QubmFtZX08L2gyPmA7XHJcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChjb250ZW50SGVhZGVyKTtcclxuXHRsZXQgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcclxuXHRsZXQgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24oKTtcclxuXHRhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRvZG9Gb3JtKTtcclxuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xyXG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvRm9ybSgpIHtcclxuXHRpZiAodGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcclxuXHRcdHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0fSBlbHNlIGlmICgodGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJykpIHtcclxuXHRcdHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0XHRjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcclxuXHR9XHJcbn1cclxuLy8gZXZlbnQgbGlzdGVuZXJzXHJcblxyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUZvcm0pO1xyXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==