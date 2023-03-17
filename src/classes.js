export class Project {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.tasks = [];
	}

	appendToDo(task) {
		this.tasks.push(task);
	}
}

export class ProjectKeeper {
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

export class ToDo {
	constructor(name, priority, isCompleted, date) {
		this.name = name;
		this.priority = priority;
		this.isCompleted = isCompleted;
		this.date = date;
	}
}
