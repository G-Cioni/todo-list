export { appendProject, appendTask };

function appendProject(project) {
	const list = document.getElementById('project-list');
	const title = document.createElement('div');
	title.classList.add('project-title');
	title.textContent = project.title;
	list.appendChild(title);
}

function appendTask(task) {
	const list = document.getElementById('task-list');
	const card = createTaskCard(task);
	list.appendChild(card);
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
	return card;
}
