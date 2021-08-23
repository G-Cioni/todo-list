import { renderTasks, resetTextInput } from './dom.js';
import { createTask } from './task.js';
import { activeProject, projects } from './project.js';
import { save } from './localStorage';
export { quickAdd };

const createTaskBtn = document.getElementById('create-task-btn');

const quickAddInput = document.getElementById('quick-add-input');
const quickAddBtn = document.getElementById('quick-add-btn');

quickAddBtn.addEventListener('click', () => quickAdd(activeProject));

function quickAdd(project) {
	if (quickAddInput.value !== '') {
		const task = createTask(
			quickAddInput.value,
			undefined,
			undefined,
			undefined
		);
		console.log(project);
		project.addTask(task);
		save(projects);
		renderTasks(project.tasks);
		resetTextInput(quickAddInput);
	}
}
