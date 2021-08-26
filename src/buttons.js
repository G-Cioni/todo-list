import {
	renderProjects,
	renderTasks,
	resetTextInput,
	createDomElement,
} from './dom.js';
import { createTask } from './task.js';
import { activeProject, projects, createProject } from './project.js';
import { save } from './localStorage';
export { quickAdd, createTaskCardBtn, deleteTask, toggleTaskDone };

const createTaskBtn = document.getElementById('create-task-btn');
createTaskBtn.addEventListener('click', () => showCreateTaskPopUp());

const quickAddInput = document.getElementById('quick-add-input');
const quickAddBtn = document.getElementById('quick-add-btn');

quickAddBtn.addEventListener('click', () => quickAdd(activeProject));

const fullAddBtn = document.getElementById('full-add-btn');
fullAddBtn.addEventListener('click', () => fullAdd(activeProject));

const newProjectInput = document.getElementById('new-project-input');
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', () =>
	newProject(newProjectInput.value)
);

function newProject(projectName) {
	console.log(projectName);
	projects.push(createProject(projectName, []));
	save(projects);
	renderProjects(projects);
	resetTextInput(newProjectInput);
}

function createTaskCardBtn(type, elClass, func) {
	const button = createDomElement(type, elClass);
	button.addEventListener('click', (e) => func(e));
	return button;
}

function showCreateTaskPopUp() {
	const popUp = document.getElementById('new-task-popup');
	if (popUp.style.display != 'block') {
		popUp.style.display = 'block';
	} else popUp.style.display = 'none';
}

function deleteTask(e) {
	const index = e.path[0].dataset.deleteBtn;
	activeProject.removeTask(activeProject.tasks[index]);
	console.table(activeProject.tasks);
	renderTasks(activeProject.tasks);
	save(projects);
}

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

function quickAdd(project) {
	if (quickAddInput.value !== '') {
		const task = createTask(
			quickAddInput.value,
			undefined,
			undefined,
			undefined,
			undefined
		);
		project.addTask(task);
		save(projects);
		renderTasks(project.tasks);
		resetTextInput(quickAddInput);
	}
}

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
