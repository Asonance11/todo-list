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


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			(e.code === 22 ||
				e.code === 1014 ||
				e.name === 'QuotaExceededError' ||
				e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			storage &&
			storage.length !== 0
		);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageAvailable);


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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _UIcreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UIcreators */ "./src/UIcreators.js");
// imports




// global variables
let contentDiv = document.getElementById('content');
// let projectArray = [];
let addProjectBtn = document.getElementById('add-project-button');
let projectForm = document.getElementById('project-form');
let taskForm = (0,_UIcreators__WEBPACK_IMPORTED_MODULE_2__.createTodoForm)();
let currentproject;
let library = document.createElement('div');
let allProjects = _classes__WEBPACK_IMPORTED_MODULE_0__.ProjectKeeper.getAllProjects();
let storageProjects = [];

// if (storageAvailable('localStorage') && localStorage.getItem('myProjects')) {
// 	const testProject = new Project('Test Project');
// 	ProjectKeeper.addProject(testProject);
// 	displayProjectFromStorage();
// }
// else {
// }

checkStorage();

// functions
function displayForm() {
	if (projectForm.style.display == 'flex') {
		projectForm.style.display = 'none';
	} else if ((projectForm.style.display = 'none')) {
		projectForm.style.display = 'flex';
	}
}
function handleProjectFormSubmit() {
	let projectFormInput = document.querySelector('#project-name');

	// make new project and add to project keeper

	const newProject = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(projectFormInput.value);
	_classes__WEBPACK_IMPORTED_MODULE_0__.ProjectKeeper.addProject(newProject);

	// UI
	displayProjectList();
	projectForm.style.display = 'none';
	projectForm.reset();
}

// function displayProjectListItem(project) {

// 	return listItem;
// }
function displayProjectList() {
	const projectListContainer = document.querySelector(
		'.project-list-container'
	);

	const projectList = document.createElement('ul');
	projectList.setAttribute('class', 'project-list');

	projectListContainer.textContent = '';
	// displayProjectsFromStorage();

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
	let addTaskButton = (0,_UIcreators__WEBPACK_IMPORTED_MODULE_2__.createAddTaskButton)();
	let deleteProjectButton = (0,_UIcreators__WEBPACK_IMPORTED_MODULE_2__.createDeleteProjectButton)(currentproject);
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
	}
}

function handleDeleteProject(project) {
	_classes__WEBPACK_IMPORTED_MODULE_0__.ProjectKeeper.deleteProject(project);
	currentproject = undefined;
	contentDiv.textContent = '';
	displayProjectList();
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
		const dueDateDiv = document.createElement('div');
		const isCompletedBtn = document.createElement('button');
		const editBtn = document.createElement('button');
		const deleteBtn = document.createElement('button');

		todoNameDiv.textContent = currentproject.tasks[i].name;
		priorityDiv.textContent = ` Priority: ${currentproject.tasks[i].priority}`;
		dueDateDiv.textContent = ` Due: ${currentproject.tasks[i].date}`;
		// readBtn.textContent = currentproject.tasks[i].read;
		editBtn.textContent = 'Edit';
		deleteBtn.textContent = 'Delete';

		todoNameDiv.classList.add('title');
		priorityDiv.classList.add('priority');
		dueDateDiv.classList.add('due-date');
		isCompletedBtn.classList.add('iscomplete');
		deleteBtn.classList.add('delete');
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
			displayTodos();
		});

		deleteBtn.addEventListener('click', () => {
			currentproject.tasks.splice(i, 1);
			displayTodos();
		});

		todoDiv.appendChild(todoNameDiv);
		todoDiv.appendChild(priorityDiv);
		todoDiv.appendChild(dueDateDiv);
		todoDiv.appendChild(isCompletedBtn);
		todoDiv.appendChild(deleteBtn);

		library.appendChild(todoDiv);
		contentDiv.appendChild(library);
	}
}

function populateProjectStorage() {
	localStorage.setItem('myProjects', JSON.stringify(allProjects));
	displayProjectList();
}
function displayProjectFromStorage() {
	storageProjects = JSON.parse(localStorage.getItem('myProjects'));
	storageProjects.forEach((project) => {
		const projectInStorage = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(project.name);
		_classes__WEBPACK_IMPORTED_MODULE_0__.ProjectKeeper.addProject(projectInStorage);
	});

	displayProjectList();
}

function checkStorage() {
	if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__["default"])('localStorage') && localStorage.getItem('myProjects')) {
		// storageProjects.forEach((project) => {
		// ProjectKeeper.addProject(project);
		displayProjectFromStorage();
		// });
	}
}

// event listeners

addProjectBtn.addEventListener('click', displayForm);
projectForm.addEventListener('submit', (e) => {
	e.preventDefault();
	handleProjectFormSubmit();
	populateProjectStorage();
	console.log(allProjects);
	console.log(localStorage);
	console.log(storageProjects);
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EscUJBQXFCLDBDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsaUNBQWlDO0FBQzNFLG9DQUFvQyw2QkFBNkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZDQUFPO0FBQ3RDLEVBQUUsOERBQXdCO0FBQzFCLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5REFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSWNyZWF0b3JzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGRUYXNrQnV0dG9uKCkge1xyXG5cdGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0YWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcclxuXHJcblx0cmV0dXJuIGFkZFRhc2tCdXR0b247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24oKSB7XHJcblx0bGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcclxuXHJcblx0cmV0dXJuIGRlbGV0ZVByb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvRm9ybSgpIHtcclxuXHRsZXQgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblx0dG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWZvcm0nKTtcclxuXHR0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZm9ybScpO1xyXG5cdGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW5hbWUnKTtcclxuXHR0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBOYW1lJyk7XHJcblxyXG5cdGxldCB0b2RvTGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR0b2RvTGFiZWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbC1jb250YWluZXInKTtcclxuXHRsZXQgdG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHR0b2RvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kby1pc0NvbXBsZXRlZCcpO1xyXG5cdHRvZG9MYWJlbC50ZXh0Q29udGVudCA9IGBpcyBpdCBjb21wbGV0ZWQ/YDtcclxuXHJcblx0bGV0IHRvZG9Jc0NvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0dG9kb0lzQ29tcGxldGVkLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdHRvZG9Jc0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8taXNDb21wbGV0ZWQnKTtcclxuXHR0b2RvSXNDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tJc0NvbXBsZXRlJyk7XHJcblxyXG5cdGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XHJcblx0dG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXQnKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLXByaW9yaXR5Jyk7XHJcblx0dG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblx0dG9kb1ByaW9yaXR5LmlubmVySFRNTCA9IGBcclxuXHRcdDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZCBoaWRkZW4+U2VsZWN0IFByaW9yaXR5PC9vcHRpb24+XHJcblx0XHQ8b3B0aW9uIHZhbHVlPVwibG93XCI+bG93PC9vcHRpb24+XHJcblx0XHQ8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+bWVkaXVtPC9vcHRpb24+XHJcblx0XHQ8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuXHRgO1xyXG5cclxuXHRsZXQgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWRhdGUnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VsZWN0IER1ZSBEYXRlJyk7XHJcblxyXG5cdGxldCB0b2RvU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0dG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcblx0dG9kb1N1Ym1pdC50ZXh0Q29udGVudCA9IGBBZGRgO1xyXG5cclxuXHR0b2RvTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xhYmVsKTtcclxuXHR0b2RvTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0lzQ29tcGxldGVkKTtcclxuXHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xyXG5cdHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xyXG5cdHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9MYWJlbENvbnRhaW5lcik7XHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1N1Ym1pdCk7XHJcblxyXG5cdHJldHVybiB0b2RvRm9ybTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgaWQpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRhc2tzID0gW107XHJcblx0fVxyXG5cclxuXHRhcHBlbmRUb0RvKHRhc2spIHtcclxuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0S2VlcGVyIHtcclxuXHRzdGF0aWMgcHJvamVjdEFycmF5ID0gW107XHJcblxyXG5cdHN0YXRpYyBnZXRBbGxQcm9qZWN0cygpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RLZWVwZXIucHJvamVjdEFycmF5LnNwbGljZShcclxuXHRcdFx0UHJvamVjdEtlZXBlci5wcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KSxcclxuXHRcdFx0MVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb0RvIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQsIGRhdGUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblx0XHR0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XHJcblx0XHR0aGlzLmRhdGUgPSBkYXRlO1xyXG5cdH1cclxufVxyXG4iLCJmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcclxuXHRsZXQgc3RvcmFnZTtcclxuXHR0cnkge1xyXG5cdFx0c3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcclxuXHRcdGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XHJcblx0XHRzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcblx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXHJcblx0XHRcdChlLmNvZGUgPT09IDIyIHx8XHJcblx0XHRcdFx0ZS5jb2RlID09PSAxMDE0IHx8XHJcblx0XHRcdFx0ZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxyXG5cdFx0XHRcdGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcclxuXHRcdFx0c3RvcmFnZSAmJlxyXG5cdFx0XHRzdG9yYWdlLmxlbmd0aCAhPT0gMFxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VBdmFpbGFibGU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0c1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0S2VlcGVyLCBUb0RvIH0gZnJvbSAnLi9jbGFzc2VzJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBzdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xyXG5pbXBvcnQge1xyXG5cdGNyZWF0ZUFkZFRhc2tCdXR0b24sXHJcblx0Y3JlYXRlRGVsZXRlUHJvamVjdEJ1dHRvbixcclxuXHRjcmVhdGVUb2RvRm9ybSxcclxufSBmcm9tICcuL1VJY3JlYXRvcnMnO1xyXG5cclxuLy8gZ2xvYmFsIHZhcmlhYmxlc1xyXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcclxubGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnV0dG9uJyk7XHJcbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxubGV0IHRhc2tGb3JtID0gY3JlYXRlVG9kb0Zvcm0oKTtcclxubGV0IGN1cnJlbnRwcm9qZWN0O1xyXG5sZXQgbGlicmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5sZXQgYWxsUHJvamVjdHMgPSBQcm9qZWN0S2VlcGVyLmdldEFsbFByb2plY3RzKCk7XHJcbmxldCBzdG9yYWdlUHJvamVjdHMgPSBbXTtcclxuXHJcbi8vIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0cycpKSB7XHJcbi8vIFx0Y29uc3QgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdCgnVGVzdCBQcm9qZWN0Jyk7XHJcbi8vIFx0UHJvamVjdEtlZXBlci5hZGRQcm9qZWN0KHRlc3RQcm9qZWN0KTtcclxuLy8gXHRkaXNwbGF5UHJvamVjdEZyb21TdG9yYWdlKCk7XHJcbi8vIH1cclxuLy8gZWxzZSB7XHJcbi8vIH1cclxuXHJcbmNoZWNrU3RvcmFnZSgpO1xyXG5cclxuLy8gZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKCkge1xyXG5cdGlmIChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jykge1xyXG5cdFx0cHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9IGVsc2UgaWYgKChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSkge1xyXG5cdFx0cHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQoKSB7XHJcblx0bGV0IHByb2plY3RGb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XHJcblxyXG5cdC8vIG1ha2UgbmV3IHByb2plY3QgYW5kIGFkZCB0byBwcm9qZWN0IGtlZXBlclxyXG5cclxuXHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdEZvcm1JbnB1dC52YWx1ZSk7XHJcblx0UHJvamVjdEtlZXBlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cclxuXHQvLyBVSVxyXG5cdGRpc3BsYXlQcm9qZWN0TGlzdCgpO1xyXG5cdHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0cHJvamVjdEZvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gZGlzcGxheVByb2plY3RMaXN0SXRlbShwcm9qZWN0KSB7XHJcblxyXG4vLyBcdHJldHVybiBsaXN0SXRlbTtcclxuLy8gfVxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdExpc3QoKSB7XHJcblx0Y29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5wcm9qZWN0LWxpc3QtY29udGFpbmVyJ1xyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHRwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbGlzdCcpO1xyXG5cclxuXHRwcm9qZWN0TGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5cdC8vIGRpc3BsYXlQcm9qZWN0c0Zyb21TdG9yYWdlKCk7XHJcblxyXG5cdGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbGlzdC1pdGVtJyk7XHJcblx0XHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHRcdGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y3VycmVudHByb2plY3QgPSBwcm9qZWN0O1xyXG5cdFx0XHRoYW5kbGVQcm9qZWN0Q2xpY2soKTtcclxuXHRcdFx0ZGlzcGxheVRvZG9zKCk7XHJcblx0XHR9KTtcclxuXHRcdHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHR9KTtcclxuXHRwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbi8vIGhhYW5kbGUgcHJvamVjdCBjbGlja1xyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2xpY2soKSB7XHJcblx0Y29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xyXG5cdGxldCBjb250ZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29udGVudEhlYWRlci5pbm5lckhUTUwgPSBgPGgyPiR7Y3VycmVudHByb2plY3QubmFtZX08L2gyPmA7XHJcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChjb250ZW50SGVhZGVyKTtcclxuXHRsZXQgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUFkZFRhc2tCdXR0b24oKTtcclxuXHRsZXQgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24oY3VycmVudHByb2plY3QpO1xyXG5cdGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0ZGlzcGxheVRvZG9Gb3JtKGN1cnJlbnRwcm9qZWN0KTtcclxuXHR9KTtcclxuXHRkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XHJcblx0XHRoYW5kbGVEZWxldGVQcm9qZWN0KGN1cnJlbnRwcm9qZWN0KVxyXG5cdCk7XHJcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9kb0Zvcm0oKSB7XHJcblx0aWYgKHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XHJcblx0XHR0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH0gZWxzZSBpZiAoKHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpKSB7XHJcblx0XHR0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdFx0Y29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuXHRQcm9qZWN0S2VlcGVyLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XHJcblx0Y3VycmVudHByb2plY3QgPSB1bmRlZmluZWQ7XHJcblx0Y29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xyXG5cdGRpc3BsYXlQcm9qZWN0TGlzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb2Rvc1RvQXJyYXkoKSB7XHJcblx0bGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xyXG5cdGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLW5hbWUnKTtcclxuXHRsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKTtcclxuXHRsZXQgdG9kb0lzQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8taXNDb21wbGV0ZWQnKTtcclxuXHRsZXQgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XHJcblx0Ly8gY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvKFxyXG5cdC8vIFx0dG9kb0Zvcm1bJ3RvZG8tbmFtZSddLnZhbHVlLFxyXG5cdC8vIFx0dG9kb0Zvcm1bJ3RvZG8tcHJpb3JpdHknXS5vcHRpb25zW1xyXG5cdC8vIFx0XHR0b2RvRm9ybVsndG9kby1wcmlvcml0eSddLnNlbGVjdGVkSW5kZXhcclxuXHQvLyBcdF0udmFsdWUsXHJcblx0Ly8gXHR0b2RvRm9ybVsndG9kby1pc0NvbXBsZXRlZCddLmNoZWNrZWQsXHJcblx0Ly8gXHR0b2RvRm9ybVsndG9kby1kYXRlJ10udmFsdWVcclxuXHQvLyApO1xyXG5cclxuXHRjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8oXHJcblx0XHR0b2RvTmFtZS52YWx1ZSxcclxuXHRcdHRvZG9Qcmlvcml0eS5vcHRpb25zW3RvZG9Qcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZSxcclxuXHRcdHRvZG9Jc0NvbXBsZXRlZC5jaGVja2VkLFxyXG5cdFx0dG9kb0RhdGUudmFsdWVcclxuXHQpO1xyXG5cdGN1cnJlbnRwcm9qZWN0LmFwcGVuZFRvRG8obmV3VG9kbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvcygpIHtcclxuXHRsaWJyYXJ5LnRleHRDb250ZW50ID0gJyc7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50cHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0Y29uc3QgdG9kb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRjb25zdCBpc0NvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0Y29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG5cdFx0dG9kb05hbWVEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50cHJvamVjdC50YXNrc1tpXS5uYW1lO1xyXG5cdFx0cHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBgIFByaW9yaXR5OiAke2N1cnJlbnRwcm9qZWN0LnRhc2tzW2ldLnByaW9yaXR5fWA7XHJcblx0XHRkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gYCBEdWU6ICR7Y3VycmVudHByb2plY3QudGFza3NbaV0uZGF0ZX1gO1xyXG5cdFx0Ly8gcmVhZEJ0bi50ZXh0Q29udGVudCA9IGN1cnJlbnRwcm9qZWN0LnRhc2tzW2ldLnJlYWQ7XHJcblx0XHRlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xyXG5cdFx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcblxyXG5cdFx0dG9kb05hbWVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuXHRcdHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XHJcblx0XHRkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XHJcblx0XHRpc0NvbXBsZXRlZEJ0bi5jbGFzc0xpc3QuYWRkKCdpc2NvbXBsZXRlJyk7XHJcblx0XHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XHJcblx0XHR0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcclxuXHJcblx0XHRpZiAoY3VycmVudHByb2plY3QudGFza3NbaV0uaXNDb21wbGV0ZWQpIHtcclxuXHRcdFx0aXNDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuXHRcdFx0aXNDb21wbGV0ZWRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2M2RhNjMnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXNDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnTm90IENvbXBsZXRlZCc7XHJcblx0XHRcdGlzQ29tcGxldGVkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTA0ZjYzJztcclxuXHRcdH1cclxuXHJcblx0XHRpc0NvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Y3VycmVudHByb2plY3QudGFza3NbaV0uaXNDb21wbGV0ZWQgPVxyXG5cdFx0XHRcdCFjdXJyZW50cHJvamVjdC50YXNrc1tpXS5pc0NvbXBsZXRlZDtcclxuXHRcdFx0ZGlzcGxheVRvZG9zKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGN1cnJlbnRwcm9qZWN0LnRhc2tzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0ZGlzcGxheVRvZG9zKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9OYW1lRGl2KTtcclxuXHRcdHRvZG9EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG5cdFx0dG9kb0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcclxuXHRcdHRvZG9EaXYuYXBwZW5kQ2hpbGQoaXNDb21wbGV0ZWRCdG4pO1xyXG5cdFx0dG9kb0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuXHRcdGxpYnJhcnkuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcblx0XHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGxpYnJhcnkpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0U3RvcmFnZSgpIHtcclxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcblx0ZGlzcGxheVByb2plY3RMaXN0KCk7XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RGcm9tU3RvcmFnZSgpIHtcclxuXHRzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RzJykpO1xyXG5cdHN0b3JhZ2VQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRjb25zdCBwcm9qZWN0SW5TdG9yYWdlID0gbmV3IFByb2plY3QocHJvamVjdC5uYW1lKTtcclxuXHRcdFByb2plY3RLZWVwZXIuYWRkUHJvamVjdChwcm9qZWN0SW5TdG9yYWdlKTtcclxuXHR9KTtcclxuXHJcblx0ZGlzcGxheVByb2plY3RMaXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrU3RvcmFnZSgpIHtcclxuXHRpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSkge1xyXG5cdFx0Ly8gc3RvcmFnZVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdC8vIFByb2plY3RLZWVwZXIuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuXHRcdGRpc3BsYXlQcm9qZWN0RnJvbVN0b3JhZ2UoKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJzXHJcblxyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUZvcm0pO1xyXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCgpO1xyXG5cdHBvcHVsYXRlUHJvamVjdFN0b3JhZ2UoKTtcclxuXHRjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XHJcblx0Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxuXHRjb25zb2xlLmxvZyhzdG9yYWdlUHJvamVjdHMpO1xyXG59KTtcclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0dGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRhZGRUb2Rvc1RvQXJyYXkoKTtcclxuXHR0YXNrRm9ybS5yZXNldCgpO1xyXG5cdGRpc3BsYXlUb2RvcygpO1xyXG5cdGNvbnNvbGUubG9nKGN1cnJlbnRwcm9qZWN0KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==