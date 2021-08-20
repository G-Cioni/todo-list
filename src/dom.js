export { renderProjects, renderTasks, selectProject, resetTextInput };

function appendProject(project) {
	const list = document.getElementById('project-list');
	const title = document.createElement('div');
	title.classList.add('project-title');
	title.textContent = project.title;
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
	assignIndex(card, 'task-list');
	return card;
}

function assignIndex(domElement, domParentId) {
	const index = document.getElementById(domParentId).children.length;
	domElement.dataset.index = index - 1;
}

function selectProject(project) {
	const projectTitle = document.getElementById('project-title');
	projectTitle.textContent = project.title;
}

function resetTextInput(input) {
	input.value = '';
}
