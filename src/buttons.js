import { renderTasks, resetTextInput, createDomElement } from './dom.js';
import { createTask } from './task.js';
import { activeProject, projects } from './project.js';
import { save } from './localStorage';
export { quickAdd, createTaskCardBtn, deleteTask, toggleTaskDone };

// Buttons inside the Task-Card are created inside createTaskCard() in "./dom.js"

const createTaskBtn = document.getElementById('create-task-btn');

const quickAddInput = document.getElementById('quick-add-input');
const quickAddBtn = document.getElementById('quick-add-btn');

quickAddBtn.addEventListener('click', () => quickAdd(activeProject));

function createTaskCardBtn(type, elClass, func) {
	const button = createDomElement(type, elClass);
	button.addEventListener('click', (e) => func(e));
	return button;
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
	activeProject.tasks[index].toggleDone();
	renderTasks(activeProject.tasks);
	save(projects);
}
function quickAdd(project) {
	if (quickAddInput.value !== '') {
		const task = createTask(
			quickAddInput.value,
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
