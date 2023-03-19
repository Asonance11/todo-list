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

//
// event listeners

addProjectBtn.addEventListener('click', displayForm);
projectForm.addEventListener('submit', handleProjectFormSubmit);
taskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	taskForm.style.display = 'none';
	addTodosToArray();
	taskForm.reset();
	// createTodo();
	console.log(currentproject);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJY3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGRUYXNrQnV0dG9uKCkge1xyXG5cdGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0YWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBUYXNrJztcclxuXHJcblx0cmV0dXJuIGFkZFRhc2tCdXR0b247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVByb2plY3RCdXR0b24oKSB7XHJcblx0bGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcclxuXHJcblx0cmV0dXJuIGRlbGV0ZVByb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvRm9ybSgpIHtcclxuXHRsZXQgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblx0dG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWZvcm0nKTtcclxuXHR0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZm9ybScpO1xyXG5cdGxldCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0dG9kb05hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLW5hbWUnKTtcclxuXHR0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cdHRvZG9OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBOYW1lJyk7XHJcblxyXG5cdGxldCB0b2RvTGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHR0b2RvTGFiZWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsYWJlbC1jb250YWluZXInKTtcclxuXHRsZXQgdG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHR0b2RvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kby1pc0NvbXBsZXRlZCcpO1xyXG5cdHRvZG9MYWJlbC50ZXh0Q29udGVudCA9IGBpcyBpdCBjb21wbGV0ZWQ/YDtcclxuXHJcblx0bGV0IHRvZG9Jc0NvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0dG9kb0lzQ29tcGxldGVkLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdHRvZG9Jc0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8taXNDb21wbGV0ZWQnKTtcclxuXHR0b2RvSXNDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tJc0NvbXBsZXRlJyk7XHJcblxyXG5cdGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XHJcblx0dG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXQnKTtcclxuXHR0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLXByaW9yaXR5Jyk7XHJcblx0dG9kb1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblx0dG9kb1ByaW9yaXR5LmlubmVySFRNTCA9IGBcclxuXHRcdDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZCBoaWRkZW4+U2VsZWN0IFByaW9yaXR5PC9vcHRpb24+XHJcblx0XHQ8b3B0aW9uIHZhbHVlPVwibG93XCI+bG93PC9vcHRpb24+XHJcblx0XHQ8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+bWVkaXVtPC9vcHRpb24+XHJcblx0XHQ8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuXHRgO1xyXG5cclxuXHRsZXQgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbnB1dCcpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJyk7XHJcblx0dG9kb0RhdGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWRhdGUnKTtcclxuXHR0b2RvRGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cdHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VsZWN0IER1ZSBEYXRlJyk7XHJcblxyXG5cdGxldCB0b2RvU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0dG9kb1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcblx0dG9kb1N1Ym1pdC50ZXh0Q29udGVudCA9IGBBZGRgO1xyXG5cclxuXHR0b2RvTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xhYmVsKTtcclxuXHR0b2RvTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0lzQ29tcGxldGVkKTtcclxuXHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xyXG5cdHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xyXG5cdHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9MYWJlbENvbnRhaW5lcik7XHJcblx0dG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1N1Ym1pdCk7XHJcblxyXG5cdHJldHVybiB0b2RvRm9ybTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgaWQpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRhc2tzID0gW107XHJcblx0fVxyXG5cclxuXHRhcHBlbmRUb0RvKHRhc2spIHtcclxuXHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0S2VlcGVyIHtcclxuXHRzdGF0aWMgcHJvamVjdEFycmF5ID0gW107XHJcblxyXG5cdHN0YXRpYyBnZXRBbGxQcm9qZWN0cygpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RLZWVwZXIucHJvamVjdEFycmF5LnNwbGljZShcclxuXHRcdFx0UHJvamVjdEtlZXBlci5wcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KSxcclxuXHRcdFx0MVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb0RvIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQsIGRhdGUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblx0XHR0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XHJcblx0XHR0aGlzLmRhdGUgPSBkYXRlO1xyXG5cdH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydHNcclxuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdEtlZXBlciwgVG9EbyB9IGZyb20gJy4vY2xhc3Nlcyc7XHJcbmltcG9ydCB7XHJcblx0Y3JlYXRlQWRkVGFza0J1dHRvbixcclxuXHRjcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uLFxyXG5cdGNyZWF0ZVRvZG9Gb3JtLFxyXG59IGZyb20gJy4vVUljcmVhdG9ycyc7XHJcblxyXG4vLyBnbG9iYWwgdmFyaWFibGVzXHJcbmxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuLy8gbGV0IHByb2plY3RBcnJheSA9IFtdO1xyXG5sZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idXR0b24nKTtcclxubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xyXG5sZXQgdGFza0Zvcm0gPSBjcmVhdGVUb2RvRm9ybSgpO1xyXG5sZXQgY3VycmVudHByb2plY3Q7XHJcblxyXG4vLyBmdW5jdGlvbnNcclxuZnVuY3Rpb24gZGlzcGxheUZvcm0oKSB7XHJcblx0aWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XHJcblx0XHRwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH0gZWxzZSBpZiAoKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpKSB7XHJcblx0XHRwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdChlKSB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdGxldCBwcm9qZWN0Rm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xyXG5cclxuXHQvLyBtYWtlIG5ldyBwcm9qZWN0IGFuZCBhZGQgdG8gcHJvamVjdCBrZWVwZXJcclxuXHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdEZvcm1JbnB1dC52YWx1ZSk7XHJcblx0UHJvamVjdEtlZXBlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cclxuXHQvLyBVSVxyXG5cdGNyZWF0ZVByb2plY3RMaXN0KCk7XHJcblx0cHJvamVjdEZvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpc3RJdGVtKHByb2plY3QpIHtcclxuXHJcbi8vIFx0cmV0dXJuIGxpc3RJdGVtO1xyXG4vLyB9XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RMaXN0KCkge1xyXG5cdGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdCcucHJvamVjdC1saXN0LWNvbnRhaW5lcidcclxuXHQpO1xyXG5cclxuXHRjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0cHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWxpc3QnKTtcclxuXHJcblx0bGV0IGFsbFByb2plY3RzID0gUHJvamVjdEtlZXBlci5nZXRBbGxQcm9qZWN0cygpO1xyXG5cdHByb2plY3RMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcblx0Ly8gZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG5cdC8vIFx0bGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHQvLyBcdGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1saXN0LWl0ZW0nKTtcclxuXHQvLyBcdGxpc3RJdGVtLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbaV0ubmFtZTtcclxuXHQvLyBcdHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHQvLyB9XHJcblx0YWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0bGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1saXN0LWl0ZW0nKTtcclxuXHRcdGxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cdFx0bGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjdXJyZW50cHJvamVjdCA9IHByb2plY3Q7XHJcblx0XHRcdGhhbmRsZVByb2plY3RDbGljaygpO1xyXG5cdFx0fSk7XHJcblx0XHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcblx0fSk7XHJcblx0cHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xyXG59XHJcblxyXG4vLyBoYWFuZGxlIHByb2plY3QgY2xpY2tcclxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdENsaWNrKCkge1xyXG5cdGNvbnRlbnREaXYudGV4dENvbnRlbnQgPSAnJztcclxuXHRsZXQgY29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnRlbnRIZWFkZXIuaW5uZXJIVE1MID0gYDxoMj4ke2N1cnJlbnRwcm9qZWN0Lm5hbWV9PC9oMj5gO1xyXG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlcik7XHJcblx0bGV0IGFkZFRhc2tCdXR0b24gPSBjcmVhdGVBZGRUYXNrQnV0dG9uKCk7XHJcblx0bGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBjcmVhdGVEZWxldGVQcm9qZWN0QnV0dG9uKGN1cnJlbnRwcm9qZWN0KTtcclxuXHRhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XHJcblx0XHRkaXNwbGF5VG9kb0Zvcm0oY3VycmVudHByb2plY3QpXHJcblx0KTtcclxuXHRkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XHJcblx0XHRoYW5kbGVEZWxldGVQcm9qZWN0KGN1cnJlbnRwcm9qZWN0KVxyXG5cdCk7XHJcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9kb0Zvcm0oKSB7XHJcblx0aWYgKHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKSB7XHJcblx0XHR0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH0gZWxzZSBpZiAoKHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpKSB7XHJcblx0XHR0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdFx0Y29udGVudERpdi5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XHJcblx0XHRjb25zb2xlLmxvZyhjdXJyZW50cHJvamVjdCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuXHRQcm9qZWN0S2VlcGVyLmRlbGV0ZVByb2plY3QocHJvamVjdCk7XHJcblx0Y3VycmVudHByb2plY3QgPSB1bmRlZmluZWQ7XHJcblx0Y29udGVudERpdi50ZXh0Q29udGVudCA9ICcnO1xyXG5cdGNyZWF0ZVByb2plY3RMaXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9zVG9BcnJheSgpIHtcclxuXHRsZXQgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtJyk7XHJcblx0bGV0IHRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbmFtZScpO1xyXG5cdGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xyXG5cdGxldCB0b2RvSXNDb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1pc0NvbXBsZXRlZCcpO1xyXG5cdGxldCB0b2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRhdGUnKTtcclxuXHQvLyBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8oXHJcblx0Ly8gXHR0b2RvRm9ybVsndG9kby1uYW1lJ10udmFsdWUsXHJcblx0Ly8gXHR0b2RvRm9ybVsndG9kby1wcmlvcml0eSddLm9wdGlvbnNbXHJcblx0Ly8gXHRcdHRvZG9Gb3JtWyd0b2RvLXByaW9yaXR5J10uc2VsZWN0ZWRJbmRleFxyXG5cdC8vIFx0XS52YWx1ZSxcclxuXHQvLyBcdHRvZG9Gb3JtWyd0b2RvLWlzQ29tcGxldGVkJ10uY2hlY2tlZCxcclxuXHQvLyBcdHRvZG9Gb3JtWyd0b2RvLWRhdGUnXS52YWx1ZVxyXG5cdC8vICk7XHJcblxyXG5cdGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9EbyhcclxuXHRcdHRvZG9OYW1lLnZhbHVlLFxyXG5cdFx0dG9kb1ByaW9yaXR5Lm9wdGlvbnNbdG9kb1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlLFxyXG5cdFx0dG9kb0lzQ29tcGxldGVkLmNoZWNrZWQsXHJcblx0XHR0b2RvRGF0ZS52YWx1ZVxyXG5cdCk7XHJcblx0Y3VycmVudHByb2plY3QuYXBwZW5kVG9EbyhuZXdUb2RvKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlVG9kbygpIHtcclxuLy8gXHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbi8vIFx0XHRjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vIFx0XHRjb25zdCB0b2RvTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyBcdFx0Y29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gXHRcdGNvbnN0IGlzQ29tcGxldGVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbi8vIFx0XHRjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vIFx0XHRjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbi8vIFx0XHR0b2RvTmFtZURpdi50ZXh0Q29udGVudCA9IGN1cnJlbnRwcm9qZWN0LnRhc2tzW2ldLm5hbWU7XHJcbi8vIFx0XHRwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IGN1cnJlbnRwcm9qZWN0LnRhc2tzW2ldLnByaW9yaXR5O1xyXG4vLyBcdFx0Ly8gcmVhZEJ0bi50ZXh0Q29udGVudCA9IGN1cnJlbnRwcm9qZWN0LnRhc2tzW2ldLnJlYWQ7XHJcbi8vIFx0XHRlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xyXG4vLyBcdFx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcblxyXG4vLyBcdFx0dG9kb05hbWVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuLy8gXHRcdHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XHJcbi8vIFx0XHRpc0NvbXBsZXRlZEJ0bi5jbGFzc0xpc3QuYWRkKCdpc2NvbXBsZXRlJyk7XHJcbi8vIFx0XHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XHJcbi8vIFx0XHRlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcclxuLy8gXHRcdHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG5cclxuLy8gXHRcdGlmIChjdXJyZW50cHJvamVjdC50YXNrc1tpXS5pc0NvbXBsZXRlZCkge1xyXG4vLyBcdFx0XHRpc0NvbXBsZXRlZEJ0bi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4vLyBcdFx0XHRpc0NvbXBsZXRlZEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzYzZGE2Myc7XHJcbi8vIFx0XHR9IGVsc2Uge1xyXG4vLyBcdFx0XHRpc0NvbXBsZXRlZEJ0bi50ZXh0Q29udGVudCA9ICdOb3QgQ29tcGxldGVkJztcclxuLy8gXHRcdFx0aXNDb21wbGV0ZWRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlMDRmNjMnO1xyXG4vLyBcdFx0fVxyXG5cclxuLy8gXHRcdGlzQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4vLyBcdFx0XHRjdXJyZW50cHJvamVjdC50YXNrc1tpXS5pc0NvbXBsZXRlZCA9XHJcbi8vIFx0XHRcdFx0IWN1cnJlbnRwcm9qZWN0LnRhc2tzW2ldLmlzQ29tcGxldGVkO1xyXG4vLyBcdFx0XHRjcmVhdGVUb2RvKCk7XHJcbi8vIFx0XHR9KTtcclxuXHJcbi8vIFx0XHR0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9OYW1lRGl2KTtcclxuLy8gXHRcdHRvZG9EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG4vLyBcdFx0dG9kb0Rpdi5hcHBlbmRDaGlsZChpc0NvbXBsZXRlZEJ0bik7XHJcbi8vIFx0XHR0b2RvRGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xyXG4vLyBcdFx0dG9kb0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuLy8gXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vL1xyXG4vLyBldmVudCBsaXN0ZW5lcnNcclxuXHJcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Rm9ybSk7XHJcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVByb2plY3RGb3JtU3VibWl0KTtcclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0dGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRhZGRUb2Rvc1RvQXJyYXkoKTtcclxuXHR0YXNrRm9ybS5yZXNldCgpO1xyXG5cdC8vIGNyZWF0ZVRvZG8oKTtcclxuXHRjb25zb2xlLmxvZyhjdXJyZW50cHJvamVjdCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=