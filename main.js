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
	addTaskButton.addEventListener('click', (e) =>
		displayTodoForm(currentproject)
	);
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

// function createTodo() {
// 	for (let i = 0; i < currentproject.tasks.length; i++) {
// 		const todoDiv = document.createElement('div');
// 		const todoNameDiv = document.createElement('div');
// 		const priorityDiv = document.createElement('div');
// 		const isCompletedBtn = document.createElement('button');
// 		const editBtn = document.createElement('div');
// 		const deleteBtn = document.createElement('button');

// 		todoNameDiv.textContent = currentproject.tasks[i].name;
// 		priorityDiv.textContent = currentproject.tasks[i].priority;
// 		// readBtn.textContent = currentproject.tasks[i].read;
// 		editBtn.textContent = 'Edit';
// 		deleteBtn.textContent = 'Delete';

// 		todoNameDiv.classList.add('title');
// 		priorityDiv.classList.add('priority');
// 		isCompletedBtn.classList.add('iscomplete');
// 		deleteBtn.classList.add('delete');
// 		editBtn.classList.add('edit');
// 		todoDiv.classList.add('todo');

// 		if (currentproject.tasks[i].isCompleted) {
// 			isCompletedBtn.textContent = 'Completed';
// 			isCompletedBtn.style.backgroundColor = '#63da63';
// 		} else {
// 			isCompletedBtn.textContent = 'Not Completed';
// 			isCompletedBtn.style.backgroundColor = '#e04f63';
// 		}

// 		isCompletedBtn.addEventListener('click', function () {
// 			currentproject.tasks[i].isCompleted =
// 				!currentproject.tasks[i].isCompleted;
// 			createTodo();
// 		});

// 		todoDiv.appendChild(todoNameDiv);
// 		todoDiv.appendChild(priorityDiv);
// 		todoDiv.appendChild(isCompletedBtn);
// 		todoDiv.appendChild(editBtn);
// 		todoDiv.appendChild(deleteBtn);

// 		content.appendChild(todoDiv);
// 	}
// }

// function handleTodoFormSubmit(e) {
// 	e.preventDefault();
// 	taskForm.style.display = 'none';
// 	taskForm.reset();
// 	addTodosToArray();
// 	// createTodo();
// 	console.log(currentproject);
// }

// event listeners

addProjectBtn.addEventListener('click', displayForm);
projectForm.addEventListener('submit', handleProjectFormSubmit);
taskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	taskForm.style.display = 'none';
	taskForm.reset();
	addTodosToArray();
	// createTodo();
	console.log(currentproject);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSWNyZWF0b3JzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkVGFza0J1dHRvbigpIHtcclxuXHRsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnKyBBZGQgVGFzayc7XHJcblxyXG5cdHJldHVybiBhZGRUYXNrQnV0dG9uO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uKCkge1xyXG5cdGxldCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0ZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XHJcblxyXG5cdHJldHVybiBkZWxldGVQcm9qZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zvcm0oKSB7XHJcblx0bGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cdHRvZG9Gb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1mb3JtJyk7XHJcblx0dG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWZvcm0nKTtcclxuXHRsZXQgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXQnKTtcclxuXHR0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1uYW1lJyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHR0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgTmFtZScpO1xyXG5cclxuXHRsZXQgdG9kb0xhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0dG9kb0xhYmVsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGFiZWwtY29udGFpbmVyJyk7XHJcblx0bGV0IHRvZG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0dG9kb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG8taXNDb21wbGV0ZWQnKTtcclxuXHR0b2RvTGFiZWwudGV4dENvbnRlbnQgPSBgaXMgaXQgY29tcGxldGVkP2A7XHJcblxyXG5cdGxldCB0b2RvSXNDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdHRvZG9Jc0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuXHR0b2RvSXNDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWlzQ29tcGxldGVkJyk7XHJcblx0dG9kb0lzQ29tcGxldGVkLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrSXNDb21wbGV0ZScpO1xyXG5cclxuXHRsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblx0dG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xyXG5cdHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XHJcblx0dG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1wcmlvcml0eScpO1xyXG5cdHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cdHRvZG9Qcmlvcml0eS5pbm5lckhUTUwgPSBgXHJcblx0XHQ8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuPlNlbGVjdCBQcmlvcml0eTwvb3B0aW9uPlxyXG5cdFx0PG9wdGlvbiB2YWx1ZT1cImxvd1wiPmxvdzwvb3B0aW9uPlxyXG5cdFx0PG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPm1lZGl1bTwvb3B0aW9uPlxyXG5cdFx0PG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcblx0YDtcclxuXHJcblx0bGV0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXQnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1kYXRlJyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlbGVjdCBEdWUgRGF0ZScpO1xyXG5cclxuXHRsZXQgdG9kb1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdHRvZG9TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG5cdHRvZG9TdWJtaXQudGV4dENvbnRlbnQgPSBgQWRkYDtcclxuXHJcblx0dG9kb0xhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MYWJlbCk7XHJcblx0dG9kb0xhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Jc0NvbXBsZXRlZCk7XHJcblxyXG5cdHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcclxuXHR0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xyXG5cdHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcclxuXHR0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTGFiZWxDb250YWluZXIpO1xyXG5cdHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9TdWJtaXQpO1xyXG5cclxuXHRyZXR1cm4gdG9kb0Zvcm07XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy50YXNrcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0YXBwZW5kVG9Ebyh0YXNrKSB7XHJcblx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdEtlZXBlciB7XHJcblx0c3RhdGljIHByb2plY3RBcnJheSA9IFtdO1xyXG5cclxuXHRzdGF0aWMgZ2V0QWxsUHJvamVjdHMoKSB7XHJcblx0XHRyZXR1cm4gUHJvamVjdEtlZXBlci5wcm9qZWN0QXJyYXk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcblx0XHRyZXR1cm4gUHJvamVjdEtlZXBlci5wcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheS5zcGxpY2UoXHJcblx0XHRcdFByb2plY3RLZWVwZXIucHJvamVjdEFycmF5LmluZGV4T2YocHJvamVjdCksXHJcblx0XHRcdDFcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9EbyB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkLCBkYXRlKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG5cdFx0dGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xyXG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnRzXHJcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RLZWVwZXIsIFRvRG8gfSBmcm9tICcuL2NsYXNzZXMnO1xyXG5pbXBvcnQge1xyXG5cdGNyZWF0ZUFkZFRhc2tCdXR0b24sXHJcblx0Y3JlYXRlRGVsZXRlUHJvamVjdEJ1dHRvbixcclxuXHRjcmVhdGVUb2RvRm9ybSxcclxufSBmcm9tICcuL1VJY3JlYXRvcnMnO1xyXG5cclxuLy8gZ2xvYmFsIHZhcmlhYmxlc1xyXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcclxubGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnV0dG9uJyk7XHJcbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxubGV0IHRhc2tGb3JtID0gY3JlYXRlVG9kb0Zvcm0oKTtcclxubGV0IGN1cnJlbnRwcm9qZWN0O1xyXG5cclxuLy8gZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKCkge1xyXG5cdGlmIChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xyXG5cdFx0cHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9IGVsc2UgaWYgKChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSkge1xyXG5cdFx0cHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQoZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0cHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRsZXQgcHJvamVjdEZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcclxuXHJcblx0Ly8gbWFrZSBuZXcgcHJvamVjdCBhbmQgYWRkIHRvIHByb2plY3Qga2VlcGVyXHJcblx0Y29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RGb3JtSW5wdXQudmFsdWUpO1xyXG5cdFByb2plY3RLZWVwZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuXHJcblx0Ly8gVUlcclxuXHRjcmVhdGVQcm9qZWN0TGlzdCgpO1xyXG5cdHByb2plY3RGb3JtLnJlc2V0KCk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RMaXN0SXRlbShwcm9qZWN0KSB7XHJcblxyXG4vLyBcdHJldHVybiBsaXN0SXRlbTtcclxuLy8gfVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGlzdCgpIHtcclxuXHRjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHQnLnByb2plY3QtbGlzdC1jb250YWluZXInXHJcblx0KTtcclxuXHJcblx0Y29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1saXN0Jyk7XHJcblxyXG5cdGxldCBhbGxQcm9qZWN0cyA9IFByb2plY3RLZWVwZXIuZ2V0QWxsUHJvamVjdHMoKTtcclxuXHRwcm9qZWN0TGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5cdC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuXHQvLyBcdGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0Ly8gXHRsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbGlzdC1pdGVtJyk7XHJcblx0Ly8gXHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XHJcblx0Ly8gXHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcblx0Ly8gfVxyXG5cdGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbGlzdC1pdGVtJyk7XHJcblx0XHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHRcdGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y3VycmVudHByb2plY3QgPSBwcm9qZWN0O1xyXG5cdFx0XHRoYW5kbGVQcm9qZWN0Q2xpY2soKTtcclxuXHRcdH0pO1xyXG5cdFx0cHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG5cdH0pO1xyXG5cdHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcclxufVxyXG5cclxuLy8gaGFhbmRsZSBwcm9qZWN0IGNsaWNrXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDbGljaygpIHtcclxuXHRjb250ZW50RGl2LnRleHRDb250ZW50ID0gJyc7XHJcblx0bGV0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb250ZW50SGVhZGVyLmlubmVySFRNTCA9IGA8aDI+JHtjdXJyZW50cHJvamVjdC5uYW1lfTwvaDI+YDtcclxuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXIpO1xyXG5cdGxldCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlQWRkVGFza0J1dHRvbigpO1xyXG5cdGxldCBkZWxldGVQcm9qZWN0QnV0dG9uID0gY3JlYXRlRGVsZXRlUHJvamVjdEJ1dHRvbihjdXJyZW50cHJvamVjdCk7XHJcblx0YWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxyXG5cdFx0ZGlzcGxheVRvZG9Gb3JtKGN1cnJlbnRwcm9qZWN0KVxyXG5cdCk7XHJcblx0ZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxyXG5cdFx0aGFuZGxlRGVsZXRlUHJvamVjdChjdXJyZW50cHJvamVjdClcclxuXHQpO1xyXG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XHJcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRvZG9Gb3JtKCkge1xyXG5cdGlmICh0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xyXG5cdFx0dGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9IGVsc2UgaWYgKCh0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSkge1xyXG5cdFx0dGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xyXG5cdFx0Y29uc29sZS5sb2coY3VycmVudHByb2plY3QpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcblx0UHJvamVjdEtlZXBlci5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xyXG5cdGN1cnJlbnRwcm9qZWN0ID0gdW5kZWZpbmVkO1xyXG5cdGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcclxuXHRjcmVhdGVQcm9qZWN0TGlzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb2Rvc1RvQXJyYXkoKSB7XHJcblx0bGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xyXG5cdGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5hbWUnKTtcclxuXHRsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKTtcclxuXHRsZXQgdG9kb0lzQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8taXNDb21wbGV0ZWQnKTtcclxuXHRsZXQgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XHJcblx0Ly8gY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvKFxyXG5cdC8vIFx0dG9kb0Zvcm1bJ3RvZG8tbmFtZSddLnZhbHVlLFxyXG5cdC8vIFx0dG9kb0Zvcm1bJ3RvZG8tcHJpb3JpdHknXS5vcHRpb25zW1xyXG5cdC8vIFx0XHR0b2RvRm9ybVsndG9kby1wcmlvcml0eSddLnNlbGVjdGVkSW5kZXhcclxuXHQvLyBcdF0udmFsdWUsXHJcblx0Ly8gXHR0b2RvRm9ybVsndG9kby1pc0NvbXBsZXRlZCddLmNoZWNrZWQsXHJcblx0Ly8gXHR0b2RvRm9ybVsndG9kby1kYXRlJ10udmFsdWVcclxuXHQvLyApO1xyXG5cclxuXHRjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8oXHJcblx0XHR0b2RvTmFtZS52YWx1ZSxcclxuXHRcdHRvZG9Qcmlvcml0eS5vcHRpb25zW3RvZG9Qcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZSxcclxuXHRcdHRvZG9Jc0NvbXBsZXRlZC5jaGVja2VkLFxyXG5cdFx0dG9kb0RhdGUudmFsdWVcclxuXHQpO1xyXG5cdGN1cnJlbnRwcm9qZWN0LmFwcGVuZFRvRG8obmV3VG9kbyk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVRvZG8oKSB7XHJcbi8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50cHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4vLyBcdFx0Y29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyBcdFx0Y29uc3QgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gXHRcdGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vIFx0XHRjb25zdCBpc0NvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4vLyBcdFx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyBcdFx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4vLyBcdFx0dG9kb05hbWVEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50cHJvamVjdC50YXNrc1tpXS5uYW1lO1xyXG4vLyBcdFx0cHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50cHJvamVjdC50YXNrc1tpXS5wcmlvcml0eTtcclxuLy8gXHRcdC8vIHJlYWRCdG4udGV4dENvbnRlbnQgPSBjdXJyZW50cHJvamVjdC50YXNrc1tpXS5yZWFkO1xyXG4vLyBcdFx0ZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcclxuLy8gXHRcdGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG5cclxuLy8gXHRcdHRvZG9OYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbi8vIFx0XHRwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xyXG4vLyBcdFx0aXNDb21wbGV0ZWRCdG4uY2xhc3NMaXN0LmFkZCgnaXNjb21wbGV0ZScpO1xyXG4vLyBcdFx0ZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xyXG4vLyBcdFx0ZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcbi8vIFx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcclxuXHJcbi8vIFx0XHRpZiAoY3VycmVudHByb2plY3QudGFza3NbaV0uaXNDb21wbGV0ZWQpIHtcclxuLy8gXHRcdFx0aXNDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuLy8gXHRcdFx0aXNDb21wbGV0ZWRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2M2RhNjMnO1xyXG4vLyBcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0aXNDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnTm90IENvbXBsZXRlZCc7XHJcbi8vIFx0XHRcdGlzQ29tcGxldGVkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTA0ZjYzJztcclxuLy8gXHRcdH1cclxuXHJcbi8vIFx0XHRpc0NvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuLy8gXHRcdFx0Y3VycmVudHByb2plY3QudGFza3NbaV0uaXNDb21wbGV0ZWQgPVxyXG4vLyBcdFx0XHRcdCFjdXJyZW50cHJvamVjdC50YXNrc1tpXS5pc0NvbXBsZXRlZDtcclxuLy8gXHRcdFx0Y3JlYXRlVG9kbygpO1xyXG4vLyBcdFx0fSk7XHJcblxyXG4vLyBcdFx0dG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvTmFtZURpdik7XHJcbi8vIFx0XHR0b2RvRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuLy8gXHRcdHRvZG9EaXYuYXBwZW5kQ2hpbGQoaXNDb21wbGV0ZWRCdG4pO1xyXG4vLyBcdFx0dG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuLy8gXHRcdHRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHJcbi8vIFx0XHRjb250ZW50LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gaGFuZGxlVG9kb0Zvcm1TdWJtaXQoZSkge1xyXG4vLyBcdGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gXHR0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4vLyBcdHRhc2tGb3JtLnJlc2V0KCk7XHJcbi8vIFx0YWRkVG9kb3NUb0FycmF5KCk7XHJcbi8vIFx0Ly8gY3JlYXRlVG9kbygpO1xyXG4vLyBcdGNvbnNvbGUubG9nKGN1cnJlbnRwcm9qZWN0KTtcclxuLy8gfVxyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJzXHJcblxyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUZvcm0pO1xyXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCk7XHJcbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0dGFza0Zvcm0ucmVzZXQoKTtcclxuXHRhZGRUb2Rvc1RvQXJyYXkoKTtcclxuXHQvLyBjcmVhdGVUb2RvKCk7XHJcblx0Y29uc29sZS5sb2coY3VycmVudHByb2plY3QpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9