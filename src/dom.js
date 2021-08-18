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
	const title = document.createElement('div');
	title.classList.add('task-title');
	title.textContent = task.title;
	list.appendChild(title);
}
