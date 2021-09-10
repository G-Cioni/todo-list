export {
	activeProject,
	hiddenActiveProject,
	projects,
	createProject,
	setActiveProject,
	setHiddenActiveProject,
	removeProject,
	allTasksProject,
	createAllTasksArray,
};
import { load } from './localStorage';
import { createTask } from './task';
import { newProject } from './buttons';

// Project Factory Function
function createProject(title, tasks) {
	const proto = {
		addTask: function (task) {
			this.tasks.push(task);
		},

		removeTask: function (task) {
			const index = this.tasks.indexOf(task);
			this.tasks.splice(index, 1);
		},
		editName: function (newTitle) {
			this.title = newTitle;
		},
	};
	const project = Object.assign(Object.create(proto), {
		title,
		tasks,
	});
	return project;
}

// Sets the Active Project
function setActiveProject(project) {
	activeProject = project;
}
// Removes project from Projects array
function removeProject(index) {
	projects.splice(index, 1);
}

// Loads localStorage
let projects = load();

// Returns an array with all tasks
function createAllTasksArray() {
	return projects.reduce((array, project) => {
		project.tasks.forEach((task) => {
			createTask(task.title);
			array.push(task);
		});
		console.log(array);
		return array;
	}, []);
}

// Creates allTasksProject
let allTasksProject = createProject('All Tasks', createAllTasksArray());

// Defines the active Project
let activeProject;

// Hidden active project

let hiddenActiveProject;

// Sets the Hidden active project (needed to edit project)

function setHiddenActiveProject(project) {
	hiddenActiveProject = project;
}
