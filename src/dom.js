export { renderProjects, renderTasks, selectProject, resetTextInput };
import { setActiveProject } from './project';

//can break this into smaller functions

function appendProject(project) {
	const list = document.getElementById('project-list');
	const title = document.createElement('div');
	title.classList.add('project-title');
	title.textContent = project.title;
	const index = document.getElementById('project-list').children.length;
	title.dataset.project = index - 1;
	title.addEventListener('click', () => {
		setActiveProject(project);
		selectProject(project);
		renderTasks(project.tasks);
	});
	list.appendChild(title);
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
function createTaskTitle(task) {
	const title = document.createElement('div');
	title.classList.add('task-title');
	title.textContent = task.title;
	return title;
}

function createTaskCard(task) {
	const card = document.createElement('div');
	card.classList.add('task-card');
	const doneBtn = document.createElement('button');
	doneBtn.classList.add('doneBtn');
	const title = createTaskTitle(task);
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('deleteBtn');
	card.appendChild(doneBtn);
	card.appendChild(title);
	card.appendChild(deleteBtn);
	const index = document.getElementById('task-list').children.length;
	card.dataset.task = index - 1;
	return card;
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
