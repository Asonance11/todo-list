// imports
import { Project, ProjectKeeper, ToDo } from './classes';
import { default as storageAvailable } from './localStorage';
import {
	createAddTaskButton,
	createDeleteProjectButton,
	createTodoForm,
} from './UIcreators';

// global variables
let contentDiv = document.getElementById('content');
// let projectArray = [];
let addProjectBtn = document.getElementById('add-project-button');
let projectForm = document.getElementById('project-form');
let taskForm = createTodoForm();
let currentproject;
let library = document.createElement('div');
library.setAttribute('class', 'library');
let allProjects = ProjectKeeper.getAllProjects();
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

	const newProject = new Project(projectFormInput.value);
	ProjectKeeper.addProject(newProject);

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
	contentHeader.setAttribute('class', 'content-header');
	contentHeader.innerHTML = `<h2>${currentproject.name}</h2>`;
	contentDiv.appendChild(contentHeader);
	let addTaskButton = createAddTaskButton();
	let deleteProjectButton = createDeleteProjectButton(currentproject);
	addTaskButton.addEventListener('click', (e) => {
		displayTodoForm(currentproject);
	});
	deleteProjectButton.addEventListener('click', (e) =>
		handleDeleteProject(currentproject)
	);
	contentHeader.appendChild(addTaskButton);
	contentHeader.appendChild(deleteProjectButton);
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
	localStorage.removeItem('myProject');
	ProjectKeeper.deleteProject(project);
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

	const newTodo = new ToDo(
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
		const projectInStorage = new Project(project.name);
		ProjectKeeper.addProject(projectInStorage);
	});

	displayProjectList();
}

function checkStorage() {
	if (storageAvailable('localStorage') && localStorage.getItem('myProjects')) {
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
