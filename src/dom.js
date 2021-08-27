export {
	renderProjects,
	renderTasks,
	selectProject,
	resetTextInput,
	createDomElement,
};
import { setActiveProject } from './project';
import {
	createCardBtn,
	deleteTask,
	toggleTaskDone,
	deleteProject,
} from './buttons';

function appendProject(project) {
	const index = document.getElementById('project-list').children.length - 1;
	const list = document.getElementById('project-list');
	const title = createDomElement('div', 'project-title');
	const card = createDomElement('div', 'project-card');
	const deleteBtn = createCardBtn('button', 'small-btn', deleteProject);
	title.textContent = project.title;
	card.dataset.project = index;
	card.addEventListener('click', () => {
		renderActiveProject(project);
	});
	appendToParent(card, title, deleteBtn);
	appendToParent(list, card);
	assignProjectDataIndex(index, card, deleteBtn);
}

function renderActiveProject(project) {
	setActiveProject(project);
	selectProject(project);
	renderTasks(project.tasks);
}

function renderProjects(projects) {
	resetElements('.project-card');
	projects.forEach((project) => appendProject(project));
}

function appendTask(task) {
	const list = document.getElementById('task-list');
	const card = createTaskCard(task);
	list.appendChild(card);
}

function renderTasks(tasks) {
	resetElements('.task-card');
	appendAllTasks(tasks);
}

function appendAllTasks(tasks) {
	tasks.forEach((task) => appendTask(task));
}

function createTaskCard(task) {
	const index = document.getElementById('task-list').children.length - 1;
	const card = createDomElement('div', 'task-card');
	const doneBtn = createCardBtn('button', 'small-btn', toggleTaskDone);
	const deleteBtn = createCardBtn('button', 'small-btn', deleteTask);
	const title = createDomElement('div', 'task-title');
	doneBtn.textContent = '✓';
	deleteBtn.textContent = '-';
	title.textContent = task.title;
	appendToParent(card, doneBtn, title, deleteBtn);
	assignTaskDataIndex(index, card, doneBtn, deleteBtn);
	card.addEventListener('click', () => renderTaskDetails(task));
	return card;
}

function renderTaskDetails(task) {
	const title = document.getElementById('details-title');
	const description = document.getElementById('details-description');
	const dueDate = document.getElementById('details-due-date');
	const priority = document.getElementById('details-priority');
	title.textContent = task.title;
	description.textContent = task.description ? `${task.description}` : '';
	dueDate.textContent = task.dueDate ? `Due Date: ${task.dueDate}` : '';
	priority.textContent = task.priority ? `Priority: ${task.priority}` : '';
}

function assignTaskDataIndex(index, card, doneBtn, deleteBtn) {
	card.dataset.task = index;
	doneBtn.dataset.doneBtn = index;
	deleteBtn.dataset.deleteBtn = index;
}

function assignProjectDataIndex(index, card, deleteBtn) {
	card.dataset.project = index;
	deleteBtn.dataset.deleteProjectBtn = index;
}

function appendToParent(parent, ...args) {
	args.forEach((arg) => parent.appendChild(arg));
}

function createDomElement(type, elClass) {
	const element = document.createElement(`${type}`);
	element.classList.add(`${elClass}`);
	return element;
}

function resetElements(elClass) {
	let elements = document.querySelectorAll(elClass);
	elements.forEach((element) => element.remove());
}

function selectProject(project) {
	const projectTitle = document.getElementById('project-title');
	projectTitle.textContent = project.title;
}

function resetTextInput(...args) {
	args.forEach((arg) => (arg.value = ''));
}
