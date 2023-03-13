/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectKeeper": () => (/* binding */ ProjectKeeper)
/* harmony export */ });
class Project {
	constructor(name, id) {
		this.name = name;
		this.id = id;
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
// imports


// global variables
let content = document.getElementById('content');
// let projectArray = [];
let addProjectBtn = document.getElementById('add-project-button');
let projectForm = document.getElementById('project-form');

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

	let projectFormInput = document.querySelector('#project-name');

	// make new project and add to project keeper
	const newProject = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(projectFormInput.value);
	_classes__WEBPACK_IMPORTED_MODULE_0__.ProjectKeeper.addProject(newProject);

	// UI
	createProjectList();
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
		projectList.appendChild(listItem);
	});
	projectListContainer.appendChild(projectList);
}

// event listeners

addProjectBtn.addEventListener('click', displayForm);
projectForm.addEventListener('submit', handleProjectFormSubmit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQU87QUFDL0IsQ0FBQyw4REFBd0I7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrRUFBNEI7QUFDL0M7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0S2VlcGVyIHtcclxuXHRzdGF0aWMgcHJvamVjdEFycmF5ID0gW107XHJcblxyXG5cdHN0YXRpYyBnZXRBbGxQcm9qZWN0cygpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHJldHVybiBQcm9qZWN0S2VlcGVyLnByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG5cdFx0cmV0dXJuIFByb2plY3RLZWVwZXIucHJvamVjdEFycmF5LnNwbGljZShcclxuXHRcdFx0UHJvamVjdEtlZXBlci5wcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KSxcclxuXHRcdFx0MVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnRzXHJcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RLZWVwZXIgfSBmcm9tICcuL2NsYXNzZXMnO1xyXG5cclxuLy8gZ2xvYmFsIHZhcmlhYmxlc1xyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcclxubGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnV0dG9uJyk7XHJcbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybSgpIHtcclxuXHRpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpIHtcclxuXHRcdHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0fSBlbHNlIGlmICgocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJykpIHtcclxuXHRcdHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RGb3JtU3VibWl0KGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdGxldCBwcm9qZWN0Rm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xyXG5cclxuXHQvLyBtYWtlIG5ldyBwcm9qZWN0IGFuZCBhZGQgdG8gcHJvamVjdCBrZWVwZXJcclxuXHRjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdEZvcm1JbnB1dC52YWx1ZSk7XHJcblx0UHJvamVjdEtlZXBlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG5cclxuXHQvLyBVSVxyXG5cdGNyZWF0ZVByb2plY3RMaXN0KCk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RMaXN0SXRlbShwcm9qZWN0KSB7XHJcblxyXG4vLyBcdHJldHVybiBsaXN0SXRlbTtcclxuLy8gfVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGlzdCgpIHtcclxuXHRjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHQnLnByb2plY3QtbGlzdC1jb250YWluZXInXHJcblx0KTtcclxuXHJcblx0Y29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1saXN0Jyk7XHJcblxyXG5cdGxldCBhbGxQcm9qZWN0cyA9IFByb2plY3RLZWVwZXIuZ2V0QWxsUHJvamVjdHMoKTtcclxuXHRwcm9qZWN0TGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5cdC8vIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuXHQvLyBcdGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0Ly8gXHRsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbGlzdC1pdGVtJyk7XHJcblx0Ly8gXHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XHJcblx0Ly8gXHRwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcblx0Ly8gfVxyXG5cdGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtbGlzdC1pdGVtJyk7XHJcblx0XHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHRcdHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHR9KTtcclxuXHRwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XHJcbn1cclxuXHJcbi8vIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGb3JtKTtcclxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=