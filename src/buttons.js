import {
	renderProjects,
	renderTasks,
	resetTextInput,
	createDomElement,
} from './dom.js';
import { createTask } from './task.js';
import {
	activeProject,
	projects,
	createProject,
	removeProject,
} from './project.js';
import { save } from './localStorage';
export {
	newProject,
	quickAdd,
	createCardBtn,
	deleteTask,
	toggleTaskDone,
	deleteProject,
};

// Create Tasks button opens pop-up and allows a full task to be added
const createTaskBtn = document.getElementById('create-task-btn');
createTaskBtn.addEventListener('click', () => showCreateTaskPopUp());

// Quickly add a task with only the title, but no other information
const quickAddInput = document.getElementById('quick-add-input');
const quickAddBtn = document.getElementById('quick-add-btn');
quickAddBtn.addEventListener('click', () => quickAdd(activeProject));

// Add a task with title, description, due date and priority
const fullAddBtn = document.getElementById('full-add-btn');
fullAddBtn.addEventListener('click', () => fullAdd(activeProject));

// Add a new Project
const newProjectInput = document.getElementById('new-project-input');
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', () =>
	newProject(newProjectInput.value)
);

// Creates a new Project
function newProject(projectName) {
	console.log(projects);
	projects.push(createProject(projectName, []));
	save(projects);
	renderProjects(projects);
	resetTextInput(newProjectInput);
}

// Create a card. Can be used for a task or a project
function createCardBtn(type, elClass, func) {
	const button = createDomElement(type, elClass);
	button.addEventListener('click', (e) => func(e));
	return button;
}

// Makes the "Create new task pop-up" visible
function showCreateTaskPopUp() {
	const popUp = document.getElementById('new-task-popup');
	if (popUp.style.display != 'block') {
		popUp.style.display = 'block';
	} else popUp.style.display = 'none';
}

// Deletes a the relative task
function deleteTask(e) {
	const index = e.path[0].dataset.deleteBtn;
	activeProject.removeTask(activeProject.tasks[index]);
	renderTasks(activeProject.tasks);
	save(projects);
}

// Deletes the relative Project
function deleteProject(e) {
	const index = e.path[0].dataset.deleteProjectBtn;
	console.log(e.path[0].dataset);
	removeProject(index);
	save(projects);
	renderProjects(projects);
}

// NOT WORKING YET. Toggles a task as "Done"
function toggleTaskDone(e) {
	const index = e.path[0].dataset.doneBtn;
	const task = document.querySelector(`div[data-task="${index}"]`);
	activeProject.tasks[index].toggleDone();
	console.log(activeProject.tasks[index].isDone);
	activeProject.tasks[index].isDone
		? task.classList.add('task-done')
		: task.classList.remove('task-done');
	console.log(task);
	console.log(activeProject.tasks[index].isDone);
	renderTasks(activeProject.tasks);
	save(projects);
}

// Use quickAdd text input to create a new task with only a title
function quickAdd(project) {
	if (quickAddInput.value !== '') {
		const task = createTask(
			quickAddInput.value,
			'No description defined',
			'No due date defined',
			'No priority defined',
			undefined
		);
		project.addTask(task);
		save(projects);
		renderTasks(project.tasks);
		resetTextInput(quickAddInput);
	}
}

// Creates a task with a title, description, due date and priority
function fullAdd(project) {
	const task = createTask(
		document.getElementById('pop-up-title-input').value,
		document.getElementById('pop-up-description-input').value,
		document.getElementById('pop-up-due-date-input').value,
		document.getElementById('pop-up-priority-input').value,
		undefined
	);
	project.addTask(task);
	save(projects);
	renderTasks(project.tasks);
}
