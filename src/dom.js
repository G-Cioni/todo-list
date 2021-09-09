export {
	renderProjects,
	renderTasks,
	selectProject,
	resetTextInput,
	createDomElement,
	renderTaskDetails,
	popUpFormValidation,
	renderActiveProject,
	capitilize,
};
import { setActiveProject, projects } from './project';
import {
	createCardBtn,
	deleteTask,
	toggleTaskDone,
	deleteProject,
	showEditProjectPopUp,
} from './buttons';
import { hiddenActiveTask, setHiddenActiveTask } from './task';

// Assign Dataset to Project Card
function assignProjectDataIndex(index, card, editBtn, deleteBtn) {
	card.dataset.project = index;
	deleteBtn.dataset.deleteProjectBtn = index;
	editBtn.dataset.editProjectBtn = index;
}

// Create a Project Card
function createProjectCard(project) {
	const index = document.getElementById('project-list').children.length;
	const card = createDomElement('div', 'project-card');
	const deleteBtn = createCardBtn('button', 'small-btn', showDeleteProject);
	const title = createDomElement('div', 'project-title');
	const editBtn = createCardBtn('button', 'small-btn', showEditProjectPopUp);
	deleteBtn.innerHTML = '&#10007;';
	editBtn.innerHTML = '&#9998';
	title.textContent = project.title;
	appendToParent(card, editBtn, title, deleteBtn);
	assignProjectDataIndex(index, card, editBtn, deleteBtn);
	card.addEventListener('click', () => {
		renderActiveProject(project);
	});
	return card;
}

// Appends Project Card to Project List
function appendProject(project) {
	const list = document.getElementById('project-list');
	const card = createProjectCard(project);
	list.appendChild(card);
}

// Appends all Project Card to Project List
function appendAllProjects(project) {
	projects.forEach((project) => appendProject(project));
}

// Renders Projects
function renderProjects(projects) {
	resetElements('.project-card');
	appendAllProjects();
}

// Renders the active projects tasks
function renderActiveProject(project) {
	setActiveProject(project);
	selectProject(project);
	renderTasks(project.tasks);
}

// Renders the active projects
function selectProject(project) {
	const projectTitle = document.getElementById('project-title');
	projectTitle.textContent = project.title;
}

// Assigns dataset to task card
function assignTaskDataIndex(index, card, doneBtn, deleteBtn) {
	card.dataset.task = index;
	doneBtn.dataset.doneBtn = index;
	deleteBtn.dataset.deleteBtn = index;
}

// Create a new Task Card
function createTaskCard(task) {
	const index = document.getElementById('task-list').children.length;
	const card = createDomElement('div', 'task-card');
	const doneBtn = createCardBtn('button', 'small-btn', toggleTaskDone);
	const deleteBtn = createCardBtn('button', 'small-btn', deleteTask);
	const title = createDomElement('div', 'task-title');
	card.classList.add(`priority-${task.priority}`);
	taskDone(task, card);
	doneBtn.innerHTML = '&#10003';
	deleteBtn.innerHTML = '&#10007;';
	title.textContent = task.title;
	appendToParent(card, doneBtn, title, deleteBtn);
	assignTaskDataIndex(index, card, doneBtn, deleteBtn);
	card.addEventListener('click', () => renderTaskDetails(task));
	return card;
}

// Append a task card
function appendTask(task) {
	const list = document.getElementById('task-list');
	const card = createTaskCard(task);
	list.appendChild(card);
}

// Append all task cards
function appendAllTasks(tasks) {
	if (tasks !== undefined) {
		tasks.forEach((task) => appendTask(task));
	}
}

// Renders Projects
function renderTasks(tasks) {
	resetElements('.task-card');
	appendAllTasks(tasks);
}

// Renders Task Details on details panel
function renderTaskDetails(task) {
	const title = document.getElementById('details-title');
	const description = document.getElementById('details-description');
	const dueDate = document.getElementById('details-due-date');
	const priority = document.getElementById('details-priority');
	document.getElementById('details-panel').style.display = 'block';
	title.textContent = task.title;
	description.textContent = task.description ? `${task.description}` : '';
	dueDate.textContent = task.dueDate ? `Due Date: ${task.dueDate}` : '';
	if (task.priority === '1') {
		priority.textContent = 'Priority: !';
	} else if (task.priority === '2') {
		priority.textContent = 'Priority: !!';
	} else if (task.priority === '3') {
		priority.textContent = 'Priority: !!!';
	}
	setHiddenActiveTask(task);
}

// Appends multiple elements to a div
function appendToParent(parent, ...args) {
	args.forEach((arg) => parent.appendChild(arg));
}

// Create a DOM element with relative class
function createDomElement(type, elClass) {
	const element = document.createElement(`${type}`);
	element.classList.add(`${elClass}`);
	return element;
}

// Resets all elements with a certain class
function resetElements(elClass) {
	let elements = document.querySelectorAll(elClass);
	elements.forEach((element) => element.remove());
}

// Resets text input
function resetTextInput(...args) {
	args.forEach((arg) => (arg.value = ''));
}

// Adds task-done class to task card

function taskDone(task, card) {
	if (task.isDone === true) {
		card.classList.add('task-done');
	}
}

// Form validation

function popUpFormValidation() {
	const errorList = [];
	const title = document.getElementById('pop-up-title-input').value;
	const dueDate = document.getElementById('pop-up-due-date-input').value;
	errorList.push(titleValidation(title));
	errorList.push(dueDateValidation(dueDate));
	showErrors(errorList);
}

// Title validation
function titleValidation(title) {
	if (title === '') {
		return 'Insert title';
	} else if (title.length > 25) return 'Title max 25 characters';
}

// Due Date not in past
function dueDateValidation(dueDate) {
	const today = new Date().toISOString().slice(0, 10);
	const inputDate =
		dueDate !== '' ? new Date(dueDate).toISOString().slice(0, 10) : '';
	if (inputDate !== '' && inputDate < today) {
		return 'Due Date is in the past';
	}
}
// Show form Validation errors
function showErrors(errorList) {
	const errors = document.getElementById('errors');
	errors.textContent = errorList.join(' | ');
	if (errors.textContent === ' | ') {
		errors.textContent = '';
	}
	if (errorList.includes(undefined)) {
		errors.textContent = errors.textContent.replaceAll('|', '');
	}
}

// Capitilize first letter
function capitilize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// Show delete project prompt pop-up
function showDeleteProject(e) {
	e.stopPropagation();
	// assigns the "yes" button on the delete project prompt the dataset of the project intended to be deleted
	document.getElementById('delete-project-yes').dataset.event =
		e.path[0].dataset.deleteProjectBtn;

	document.getElementById('delete-project-prompt').style.display = 'block';
}
