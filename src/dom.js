export {
	renderProjects,
	renderTasks,
	selectProject,
	resetTextInput,
	createDomElement,
};
import { setActiveProject } from './project';
import { createTaskCardBtn, deleteTask, toggleTaskDone } from './buttons';

function appendProject(project) {
	const index = document.getElementById('project-list').children.length - 1;
	const list = document.getElementById('project-list');
	const title = createDomElement('div', 'project-title');
	title.textContent = project.title;
	title.dataset.project = index;
	title.addEventListener('click', () => {
		renderActiveProject(project);
	});
	appendToParent(list, title);
}

function renderActiveProject(project) {
	setActiveProject(project);
	selectProject(project);
	renderTasks(project.tasks);
}

function renderProjects(projects) {
	projects.forEach((project) => appendProject(project));
}

function appendTask(task) {
	const list = document.getElementById('task-list');
	const card = createTaskCard(task);
	list.appendChild(card);
}

function renderTasks(tasks) {
	resetTasks();
	appendAllTasks(tasks);
}

function appendAllTasks(tasks) {
	tasks.forEach((task) => appendTask(task));
}

function createTaskCard(task) {
	const index = document.getElementById('task-list').children.length - 1;
	const card = createDomElement('div', 'task-card');
	const doneBtn = createTaskCardBtn('button', 'doneBtn', toggleTaskDone);
	const deleteBtn = createTaskCardBtn('button', 'doneBtn', deleteTask);
	const title = createDomElement('div', 'task-title');
	title.textContent = task.title;
	appendToParent(card, doneBtn, title, deleteBtn);
	assignDataIndex(index, card, doneBtn, deleteBtn);
	return card;
}

function assignDataIndex(index, card, doneBtn, deleteBtn) {
	card.dataset.task = index;
	doneBtn.dataset.doneBtn = index;
	deleteBtn.dataset.deleteBtn = index;
}

function appendToParent(parent, ...args) {
	args.forEach((arg) => parent.appendChild(arg));
}
function createDomElement(type, elClass) {
	const element = document.createElement(`${type}`);
	element.classList.add(`${elClass}`);
	return element;
}

function resetTasks() {
	let tasks = document.querySelectorAll('.task-card');
	tasks.forEach((task) => task.remove());
}

function selectProject(project) {
	const projectTitle = document.getElementById('project-title');
	projectTitle.textContent = project.title;
}

function resetTextInput(input) {
	input.value = '';
}
