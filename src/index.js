// imports
import { Project, ProjectKeeper } from './classes';

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
	const newProject = new Project(projectFormInput.value);
	ProjectKeeper.addProject(newProject);

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
		projectList.appendChild(listItem);
	});
	projectListContainer.appendChild(projectList);
}

// event listeners

addProjectBtn.addEventListener('click', displayForm);
projectForm.addEventListener('submit', handleProjectFormSubmit);
