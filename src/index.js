// imports
import { Project, ProjectKeeper } from './classes';
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
	const newProject = new Project(projectFormInput.value);
	ProjectKeeper.addProject(newProject);

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

	let allProjects = ProjectKeeper.getAllProjects();
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
	let addTaskButton = createAddTaskButton();
	let deleteProjectButton = createDeleteProjectButton(currentproject);
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
	}
}

function handleDeleteProject(project) {
	ProjectKeeper.deleteProject(project);
	currentproject = undefined;
	contentDiv.textContent = '';
	createProjectList();
}

// function createTodo(project) {
// 	for (let i = 0; i < project.tasks.length; i++) {
// 		const todoDiv = document.createElement('div');
// 		const todoNameDiv = document.createElement('div');
// 		const priorityDiv = document.createElement('div');
// 		const isCompletedBtn = document.createElement('button');
// 		const editBtn = document.createElement('div');
// 		const deleteBtn = document.createElement('button');

// 		todoNameDiv.textContent = allTasks[i].name;
// 		priorityDiv.textContent = allTasks[i].priority;
// 		// readBtn.textContent = allTasks[i].read;
// 		editBtn.textContent = 'Edit';
// 		deleteBtn.textContent = 'Delete';

// 		todoNameDiv.classList.add('title');
// 		priorityDiv.classList.add('priority');
// 		isCompletedBtn.classList.add('iscomplete');
// 		deleteBtn.classList.add('delete');
// 		editBtn.classList.add('edit');
// 		todoDiv.classList.add('todo');

// 		if (allTasks[i].isCompleted) {
// 			isCompletedBtn.textContent = 'Completed';
// 			isCompletedBtn.style.backgroundColor = '#63da63';
// 		} else {
// 			isCompletedBtn.textContent = 'Not Completed';
// 			isCompletedBtn.style.backgroundColor = '#e04f63';
// 		}

// 		isCompletedBtn.addEventListener('click', function () {
// 			allTasks[i].isCompleted = !allTasks[i].isCompleted;
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

function addTodotoProject() {}

// event listeners

addProjectBtn.addEventListener('click', displayForm);
projectForm.addEventListener('submit', handleProjectFormSubmit);
// taskForm.addEventListener('submit', createTodo(currentproject));
