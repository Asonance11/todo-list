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
	todoForm.setAttribute('id', 'todo-form');
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
	todoPriority.setAttribute('id', 'todo-priority');
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

	appendToDo(task) {
		this.tasks.push(task);
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
	constructor(name, priority, isCompleted, date) {
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
let library = document.createElement('div');

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
		listItem.addEventListener('click', (e) => {
			currentproject = project;
			handleProjectClick();
			displayTodos();
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
	let deleteProjectButton = (0,_UIcreators__WEBPACK_IMPORTED_MODULE_1__.createDeleteProjectButton)(currentproject);
	addTaskButton.addEventListener('click', (e) => {
		displayTodoForm(currentproject);
	});
	deleteProjectButton.addEventListener('click', (e) =>
		handleDeleteProject(currentproject)
	);
	contentDiv.appendChild(addTaskButton);
	contentDiv.appendChild(deleteProjectButton);
}

function displayTodoForm() {
	if (taskForm.style.display == 'flex') {
		taskForm.style.display = 'none';
	} else if ((taskForm.style.display = 'none')) {
		taskForm.style.display = 'flex';
		contentDiv.appendChild(taskForm);
		console.log(currentproject);
	}
}

function handleDeleteProject(project) {
	_classes__WEBPACK_IMPORTED_MODULE_0__.ProjectKeeper.deleteProject(project);
	currentproject = undefined;
	contentDiv.textContent = '';
	createProjectList();
}

function addTodosToArray() {
	let todoForm = document.querySelector('#todo-form');
	let todoName = document.querySelector('#todo-name');
	let todoPriority = document.querySelector('#todo-priority');
	let todoIsCompleted = document.querySelector('#todo-isCompleted');
	let todoDate = document.querySelector('#todo-date');
	// const newTodo = new ToDo(
	// 	todoForm['todo-name'].value,
	// 	todoForm['todo-priority'].options[
	// 		todoForm['todo-priority'].selectedIndex
	// 	].value,
	// 	todoForm['todo-isCompleted'].checked,
	// 	todoForm['todo-date'].value
	// );

	const newTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.ToDo(
		todoName.value,
		todoPriority.options[todoPriority.selectedIndex].value,
		todoIsCompleted.checked,
		todoDate.value
	);
	currentproject.appendToDo(newTodo);
}

function displayTodos() {
	library.textContent = '';
	for (let i = 0; i < currentproject.tasks.length; i++) {
		const todoDiv = document.createElement('div');
		const todoNameDiv = document.createElement('div');
		const priorityDiv = document.createElement('div');
		const isCompletedBtn = document.createElement('button');
		const editBtn = document.createElement('button');
		const deleteBtn = document.createElement('button');

		todoNameDiv.textContent = currentproject.tasks[i].name;
		priorityDiv.textContent = currentproject.tasks[i].priority;
		// readBtn.textContent = currentproject.tasks[i].read;
		editBtn.textContent = 'Edit';
		deleteBtn.textContent = 'Delete';

		todoNameDiv.classList.add('title');
		priorityDiv.classList.add('priority');
		isCompletedBtn.classList.add('iscomplete');
		deleteBtn.classList.add('delete');
		editBtn.classList.add('edit');
		todoDiv.classList.add('todo');

		if (currentproject.tasks[i].isCompleted) {
			isCompletedBtn.textContent = 'Completed';
			isCompletedBtn.style.backgroundColor = '#63da63';
		} else {
			isCompletedBtn.textContent = 'Not Completed';
			isCompletedBtn.style.backgroundColor = '#e04f63';
		}

		isCompletedBtn.addEventListener('click', function () {
			currentproject.tasks[i].isCompleted =
				!currentproject.tasks[i].isCompleted;
			createTodo();
		});

		todoDiv.appendChild(todoNameDiv);
		todoDiv.appendChild(priorityDiv);
		todoDiv.appendChild(isCompletedBtn);
		todoDiv.appendChild(editBtn);
		todoDiv.appendChild(deleteBtn);

		library.appendChild(todoDiv);
		contentDiv.appendChild(library);
	}
}

// event listeners

addProjectBtn.addEventListener('click', displayForm);
projectForm.addEventListener('submit', handleProjectFormSubmit);
taskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	taskForm.style.display = 'none';
	addTodosToArray();
	taskForm.reset();
	displayTodos();
	console.log(currentproject);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUljcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tCdXR0b24oKSB7XHJcblx0bGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xyXG5cclxuXHRyZXR1cm4gYWRkVGFza0J1dHRvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVsZXRlUHJvamVjdEJ1dHRvbigpIHtcclxuXHRsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xyXG5cclxuXHRyZXR1cm4gZGVsZXRlUHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtKCkge1xyXG5cdGxldCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHR0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tZm9ybScpO1xyXG5cdHRvZG9Gb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1mb3JtJyk7XHJcblx0bGV0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHR0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHR0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tbmFtZScpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIE5hbWUnKTtcclxuXHJcblx0bGV0IHRvZG9MYWJlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdHRvZG9MYWJlbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xhYmVsLWNvbnRhaW5lcicpO1xyXG5cdGxldCB0b2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdHRvZG9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvLWlzQ29tcGxldGVkJyk7XHJcblx0dG9kb0xhYmVsLnRleHRDb250ZW50ID0gYGlzIGl0IGNvbXBsZXRlZD9gO1xyXG5cclxuXHRsZXQgdG9kb0lzQ29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHR0b2RvSXNDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcblx0dG9kb0lzQ29tcGxldGVkLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1pc0NvbXBsZXRlZCcpO1xyXG5cdHRvZG9Jc0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza0lzQ29tcGxldGUnKTtcclxuXHJcblx0bGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cdHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xyXG5cdHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tcHJpb3JpdHknKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHR0b2RvUHJpb3JpdHkuaW5uZXJIVE1MID0gYFxyXG5cdFx0PG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5TZWxlY3QgUHJpb3JpdHk8L29wdGlvbj5cclxuXHRcdDxvcHRpb24gdmFsdWU9XCJsb3dcIj5sb3c8L29wdGlvbj5cclxuXHRcdDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5tZWRpdW08L29wdGlvbj5cclxuXHRcdDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG5cdGA7XHJcblxyXG5cdGxldCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZGF0ZScpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZWxlY3QgRHVlIERhdGUnKTtcclxuXHJcblx0bGV0IHRvZG9TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHR0b2RvU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuXHR0b2RvU3VibWl0LnRleHRDb250ZW50ID0gYEFkZGA7XHJcblxyXG5cdHRvZG9MYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGFiZWwpO1xyXG5cdHRvZG9MYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXNDb21wbGV0ZWQpO1xyXG5cclxuXHR0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcclxuXHR0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0xhYmVsQ29udGFpbmVyKTtcclxuXHR0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvU3VibWl0KTtcclxuXHJcblx0cmV0dXJuIHRvZG9Gb3JtO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMudGFza3MgPSBbXTtcclxuXHR9XHJcblxyXG5cdGFwcGVuZFRvRG8odGFzaykge1xyXG5cdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RLZWVwZXIge1xyXG5cdHN0YXRpYyBwcm9qZWN0QXJyYXkgPSBbXTtcclxuXHJcblx0c3RhdGljIGdldEFsbFByb2plY3RzKCkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RLZWVwZXIucHJvamVjdEFycmF5O1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RLZWVwZXIucHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRyZXR1cm4gUHJvamVjdEtlZXBlci5wcm9qZWN0QXJyYXkuc3BsaWNlKFxyXG5cdFx0XHRQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheS5pbmRleE9mKHByb2plY3QpLFxyXG5cdFx0XHQxXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvRG8ge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByaW9yaXR5LCBpc0NvbXBsZXRlZCwgZGF0ZSkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuXHRcdHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcclxuXHRcdHRoaXMuZGF0ZSA9IGRhdGU7XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0c1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0S2VlcGVyLCBUb0RvIH0gZnJvbSAnLi9jbGFzc2VzJztcclxuaW1wb3J0IHtcclxuXHRjcmVhdGVBZGRUYXNrQnV0dG9uLFxyXG5cdGNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24sXHJcblx0Y3JlYXRlVG9kb0Zvcm0sXHJcbn0gZnJvbSAnLi9VSWNyZWF0b3JzJztcclxuXHJcbi8vIGdsb2JhbCB2YXJpYWJsZXNcclxubGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4vLyBsZXQgcHJvamVjdEFycmF5ID0gW107XHJcbmxldCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xyXG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJyk7XHJcbmxldCB0YXNrRm9ybSA9IGNyZWF0ZVRvZG9Gb3JtKCk7XHJcbmxldCBjdXJyZW50cHJvamVjdDtcclxubGV0IGxpYnJhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybSgpIHtcclxuXHRpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcclxuXHRcdHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0fSBlbHNlIGlmICgocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJykpIHtcclxuXHRcdHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RGb3JtU3VibWl0KGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0bGV0IHByb2plY3RGb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XHJcblxyXG5cdC8vIG1ha2UgbmV3IHByb2plY3QgYW5kIGFkZCB0byBwcm9qZWN0IGtlZXBlclxyXG5cdGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0Rm9ybUlucHV0LnZhbHVlKTtcclxuXHRQcm9qZWN0S2VlcGVyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XHJcblxyXG5cdC8vIFVJXHJcblx0Y3JlYXRlUHJvamVjdExpc3QoKTtcclxuXHRwcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGlzdEl0ZW0ocHJvamVjdCkge1xyXG5cclxuLy8gXHRyZXR1cm4gbGlzdEl0ZW07XHJcbi8vIH1cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpc3QoKSB7XHJcblx0Y29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5wcm9qZWN0LWxpc3QtY29udGFpbmVyJ1xyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHRwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbGlzdCcpO1xyXG5cclxuXHRsZXQgYWxsUHJvamVjdHMgPSBQcm9qZWN0S2VlcGVyLmdldEFsbFByb2plY3RzKCk7XHJcblx0cHJvamVjdExpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuXHQvLyBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0Ly8gXHRsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdC8vIFx0bGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWxpc3QtaXRlbScpO1xyXG5cdC8vIFx0bGlzdEl0ZW0udGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpXS5uYW1lO1xyXG5cdC8vIFx0cHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG5cdC8vIH1cclxuXHRhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0bGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWxpc3QtaXRlbScpO1xyXG5cdFx0bGlzdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcblx0XHRsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGN1cnJlbnRwcm9qZWN0ID0gcHJvamVjdDtcclxuXHRcdFx0aGFuZGxlUHJvamVjdENsaWNrKCk7XHJcblx0XHRcdGRpc3BsYXlUb2RvcygpO1xyXG5cdFx0fSk7XHJcblx0XHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcblx0fSk7XHJcblx0cHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xyXG59XHJcblxyXG4vLyBoYWFuZGxlIHByb2plY3QgY2xpY2tcclxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdENsaWNrKCkge1xyXG5cdGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcclxuXHRsZXQgY29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRlbnRIZWFkZXIuaW5uZXJIVE1MID0gYDxoMj4ke2N1cnJlbnRwcm9qZWN0Lm5hbWV9PC9oMj5gO1xyXG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlcik7XHJcblx0bGV0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVBZGRUYXNrQnV0dG9uKCk7XHJcblx0bGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBjcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uKGN1cnJlbnRwcm9qZWN0KTtcclxuXHRhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdGRpc3BsYXlUb2RvRm9ybShjdXJyZW50cHJvamVjdCk7XHJcblx0fSk7XHJcblx0ZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxyXG5cdFx0aGFuZGxlRGVsZXRlUHJvamVjdChjdXJyZW50cHJvamVjdClcclxuXHQpO1xyXG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XHJcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRvZG9Gb3JtKCkge1xyXG5cdGlmICh0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xyXG5cdFx0dGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9IGVsc2UgaWYgKCh0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSkge1xyXG5cdFx0dGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xyXG5cdFx0Y29uc29sZS5sb2coY3VycmVudHByb2plY3QpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcblx0UHJvamVjdEtlZXBlci5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xyXG5cdGN1cnJlbnRwcm9qZWN0ID0gdW5kZWZpbmVkO1xyXG5cdGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcclxuXHRjcmVhdGVQcm9qZWN0TGlzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb2Rvc1RvQXJyYXkoKSB7XHJcblx0bGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xyXG5cdGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5hbWUnKTtcclxuXHRsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKTtcclxuXHRsZXQgdG9kb0lzQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8taXNDb21wbGV0ZWQnKTtcclxuXHRsZXQgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XHJcblx0Ly8gY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvKFxyXG5cdC8vIFx0dG9kb0Zvcm1bJ3RvZG8tbmFtZSddLnZhbHVlLFxyXG5cdC8vIFx0dG9kb0Zvcm1bJ3RvZG8tcHJpb3JpdHknXS5vcHRpb25zW1xyXG5cdC8vIFx0XHR0b2RvRm9ybVsndG9kby1wcmlvcml0eSddLnNlbGVjdGVkSW5kZXhcclxuXHQvLyBcdF0udmFsdWUsXHJcblx0Ly8gXHR0b2RvRm9ybVsndG9kby1pc0NvbXBsZXRlZCddLmNoZWNrZWQsXHJcblx0Ly8gXHR0b2RvRm9ybVsndG9kby1kYXRlJ10udmFsdWVcclxuXHQvLyApO1xyXG5cclxuXHRjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8oXHJcblx0XHR0b2RvTmFtZS52YWx1ZSxcclxuXHRcdHRvZG9Qcmlvcml0eS5vcHRpb25zW3RvZG9Qcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZSxcclxuXHRcdHRvZG9Jc0NvbXBsZXRlZC5jaGVja2VkLFxyXG5cdFx0dG9kb0RhdGUudmFsdWVcclxuXHQpO1xyXG5cdGN1cnJlbnRwcm9qZWN0LmFwcGVuZFRvRG8obmV3VG9kbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvcygpIHtcclxuXHRsaWJyYXJ5LnRleHRDb250ZW50ID0gJyc7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50cHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0Y29uc3QgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRjb25zdCBpc0NvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0dG9kb05hbWVEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50cHJvamVjdC50YXNrc1tpXS5uYW1lO1xyXG5cdFx0cHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50cHJvamVjdC50YXNrc1tpXS5wcmlvcml0eTtcclxuXHRcdC8vIHJlYWRCdG4udGV4dENvbnRlbnQgPSBjdXJyZW50cHJvamVjdC50YXNrc1tpXS5yZWFkO1xyXG5cdFx0ZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcclxuXHRcdGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG5cclxuXHRcdHRvZG9OYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcblx0XHRwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xyXG5cdFx0aXNDb21wbGV0ZWRCdG4uY2xhc3NMaXN0LmFkZCgnaXNjb21wbGV0ZScpO1xyXG5cdFx0ZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xyXG5cdFx0ZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcblx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcclxuXHJcblx0XHRpZiAoY3VycmVudHByb2plY3QudGFza3NbaV0uaXNDb21wbGV0ZWQpIHtcclxuXHRcdFx0aXNDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuXHRcdFx0aXNDb21wbGV0ZWRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2M2RhNjMnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXNDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnTm90IENvbXBsZXRlZCc7XHJcblx0XHRcdGlzQ29tcGxldGVkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTA0ZjYzJztcclxuXHRcdH1cclxuXHJcblx0XHRpc0NvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y3VycmVudHByb2plY3QudGFza3NbaV0uaXNDb21wbGV0ZWQgPVxyXG5cdFx0XHRcdCFjdXJyZW50cHJvamVjdC50YXNrc1tpXS5pc0NvbXBsZXRlZDtcclxuXHRcdFx0Y3JlYXRlVG9kbygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZURpdik7XHJcblx0XHR0b2RvRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuXHRcdHRvZG9EaXYuYXBwZW5kQ2hpbGQoaXNDb21wbGV0ZWRCdG4pO1xyXG5cdFx0dG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuXHRcdHRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHJcblx0XHRsaWJyYXJ5LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG5cdFx0Y29udGVudERpdi5hcHBlbmRDaGlsZChsaWJyYXJ5KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGb3JtKTtcclxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQpO1xyXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdGFkZFRvZG9zVG9BcnJheSgpO1xyXG5cdHRhc2tGb3JtLnJlc2V0KCk7XHJcblx0ZGlzcGxheVRvZG9zKCk7XHJcblx0Y29uc29sZS5sb2coY3VycmVudHByb2plY3QpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9