import {
	renderProjects,
	renderTasks,
	resetTextInput,
	createDomElement,
	renderTaskDetails,
	popUpFormValidation,
	renderActiveProject,
	capitilize,
	quickAddValidation,
} from './dom.js';
import { hiddenActiveTask, createTask, setHiddenActiveTask } from './task.js';
import {
	activeProject,
	projects,
	createProject,
	removeProject,
	setHiddenActiveProject,
	hiddenActiveProject,
	setActiveProject,
	allTasksProject,
} from './project.js';
import { save } from './localStorage';
export {
	newProject,
	quickAdd,
	createCardBtn,
	deleteTask,
	toggleTaskDone,
	deleteProject,
	showEditProjectPopUp,
};

// Create Tasks button opens pop-up and allows a full task to be added
const createTaskBtn = document.getElementById('create-task-btn');
createTaskBtn.addEventListener('click', () => showTaskPopUp('Create New Task'));

// Quickly add a task with only the title, but no other information
const quickAddInput = document.getElementById('quick-add-input');
const quickAddBtn = document.getElementById('quick-add-btn');
quickAddBtn.addEventListener('click', (e) => quickAdd(activeProject, e));

// Add a task with title, description, due date and priority
const fullAddBtn = document.getElementById('full-add-btn');
fullAddBtn.addEventListener('click', () => createOrEditTask(activeProject));

// Cancel new/edit task pop-up
const taskPopUpCancel = document.getElementById('cancel-full-add-btn');
taskPopUpCancel.addEventListener('click', () => hidePopUp('task-popup'));
// Opens edit task pop-up
const editTaskBtn = document.getElementById('edit-task-btn');
editTaskBtn.addEventListener('click', () => showTaskPopUp('Edit Task'));

// Add a new Project
const newProjectInput = document.getElementById('new-project-input');
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', (e) =>
	quickAddProject(newProjectInput.value, e)
);

// Pop-up confirmation to delete a project
const cancelProjectYesBtn = document.getElementById('delete-project-yes');
cancelProjectYesBtn.addEventListener('click', (e) => deleteProject(e));

const cancelProjectNoBtn = document.getElementById('delete-project-no');
cancelProjectNoBtn.addEventListener(
	'click',
	() =>
		(document.getElementById('delete-project-prompt').style.display = 'none')
);

// Edit project name
const editProjectNameSubmit = document.getElementById(
	'edit-project-name-submit'
);
const editProjectNameInput = document.getElementById('edit-project-name-input');
editProjectNameSubmit.addEventListener('click', (e) => editProjectName(e));

// Cancel edit Project name
const cancelEditProjectName = document.getElementById(
	'edit-project-name-cancel'
);
cancelEditProjectName.addEventListener('click', () =>
	hidePopUp('edit-project-popup')
);

// All Tasks Project
const allTasksProjectCard = document.getElementById('all-tasks-project');
allTasksProjectCard.addEventListener('click', () =>
	renderActiveProject(allTasksProject)
);

// Quickly add a project
function quickAddProject(projectName, e) {
	e.preventDefault();
	quickAddValidation(projectName, 'add-project-errors');
	if (newProjectInput.value !== '' && newProjectInput.value.length < 26) {
		newProject(projectName);
	}
}
// Creates a new Project
function newProject(projectName) {
	projects.push(createProject(capitilize(projectName), []));
	save(projects);
	renderActiveProject(projects[projects.length - 1]);
	renderProjects(projects);
	resetTextInput(newProjectInput);
}

// Uses input to edit project name
function editProjectName(e) {
	const input = document.getElementById('edit-project-name-input');
	hiddenActiveProject.editName(input.value);
	save(projects);
	renderProjects(projects);
	resetTextInput(input);
	hidePopUp('edit-project-popup');
}

function hidePopUp(id) {
	const popUp = document.getElementById(id);
	popUp.style.display = 'none';
	resetTextInput(
		document.getElementById('pop-up-title-input'),
		document.getElementById('pop-up-description-input'),
		document.getElementById('pop-up-due-date-input')
	);
}

// Create a card. Can be used for a task or a project
function createCardBtn(type, elClass, func) {
	const button = createDomElement(type, elClass);
	button.addEventListener('click', (e) => func(e));
	return button;
}

// Makes the "Create new task pop-up" visible
function showTaskPopUp(title) {
	changePopUpTitle(title);
	const popUp = document.getElementById('task-popup');
	if (popUp.style.display != 'block') {
		document.querySelector(`input[value="0"`).checked = true;
		popUp.style.display = 'block';
	} else popUp.style.display = 'none';
	if (title === 'Edit Task') {
		document.getElementById('pop-up-title-input').value =
			hiddenActiveTask.title;
		document.getElementById('pop-up-description-input').value =
			hiddenActiveTask.description;
		document.getElementById('pop-up-due-date-input').value =
			hiddenActiveTask.dueDate;
		checkRadioBtn(hiddenActiveTask);
	}
}

// Change pop-up title

function changePopUpTitle(newTitle) {
	const title = document.getElementById('pop-up-title');
	title.textContent = newTitle;
}
// Makes the "Create edit project pop-up" visible
function showEditProjectPopUp(e) {
	const popUp = document.getElementById('edit-project-popup');
	const input = document.getElementById('edit-project-name-input');
	if (popUp.style.display != 'block') {
		const index = e.path[0].dataset.editProjectBtn;
		input.value = projects[index].title;
		popUp.style.display = 'block';
		setHiddenActiveProject(projects[index]);
	} else popUp.style.display = 'none';
}

// Deletes a the relative task
function deleteTask(e) {
	e.stopPropagation();
	const index = e.path[0].dataset.deleteBtn;
	if (hiddenActiveTask === activeProject.tasks[index]) {
		document.getElementById('details-panel').style.display = 'none';
	}
	if (activeProject.title === 'All Tasks') {
		const id = activeProject.tasks[index].id;
		projects.forEach((project) => {
			project.tasks.forEach((task) => {
				console.log(task.id);
				// if (task.id === id) {
				// 	console.log(task.id);
				// 	console.log(id);
				// }
			});
		});
	}
	activeProject.removeTask(activeProject.tasks[index]);
	renderTasks(activeProject.tasks);
	save(projects);
}

// Deletes the relative Project
function deleteProject(e) {
	const index = parseInt(e.path[0].dataset.event);
	if (activeProject === projects[index]) {
		document.getElementById('details-panel').style.display = 'none';
		index === 0
			? setActiveProject(projects[index + 1])
			: setActiveProject(projects[index - 1]);
	}
	removeProject(index);
	save(projects);
	renderProjects(projects);
	activeProject !== undefined
		? renderActiveProject(activeProject)
		: renderActiveProject('', []);
	document.getElementById('delete-project-prompt').style.display = 'none';
}

// NOT WORKING YET. Toggles a task as "Done"
function toggleTaskDone(e) {
	e.stopPropagation();
	const index = e.path[0].dataset.doneBtn;
	const task = document.querySelector(`div[data-task="${index}"]`);
	activeProject.tasks[index].toggleDone();
	activeProject.tasks[index].isDone
		? task.classList.add('task-done')
		: task.classList.remove('task-done');
	renderTasks(activeProject.tasks);
	save(projects);
}

// Use quickAdd text input to create a new task with only a title
function quickAdd(project, e) {
	e.preventDefault();
	quickAddValidation(quickAddInput.value, 'add-task-errors');
	if (quickAddInput.value !== '' && quickAddInput.value.length < 26) {
		if (projects[0] === undefined) {
			newProject('Personal');
			setActiveProject(projects[0]);
		}
		const task = createTask(
			quickAddInput.value,
			undefined,
			undefined,
			'0',
			undefined,
			Math.random(1)
		);
		project.addTask(task);
		save(projects);
		renderTasks(project.tasks);
		resetTextInput(quickAddInput);
	}
}

// Decides to create a new task or edit an existing one
function createOrEditTask(project) {
	popUpFormValidation();
	const errors = document.getElementById('pop-up-errors');
	if (errors.textContent === '') {
		const title = document.getElementById('pop-up-title').textContent;
		title === 'Create New Task' ? fullAdd(project) : editTask(project);
		hidePopUp('task-popup');
		resetTextInput(
			document.getElementById('pop-up-title-input'),
			document.getElementById('pop-up-description-input'),
			document.getElementById('pop-up-due-date-input')
		);
	}
}

// Creates a task with a title, description, due date and priority
function fullAdd(project) {
	if (projects[0] === undefined) {
		newProject('Personal');
		setActiveProject(projects[0]);
	}
	const task = createTask(
		document.getElementById('pop-up-title-input').value,
		document.getElementById('pop-up-description-input').value,
		document.getElementById('pop-up-due-date-input').value,
		document.querySelector('input[name="priority"]:checked').value,
		undefined,
		Math.random(1)
	);
	project.addTask(task);
	save(projects);
	renderTasks(project.tasks);
	renderTaskDetails(task);
}

// Edit the task
function editTask(project) {
	const checkedPriority = document.querySelector(
		'input[name="priority"]:checked'
	);

	const title = document.getElementById('pop-up-title-input').value;
	const description = document.getElementById('pop-up-description-input').value;
	const dueDate = document.getElementById('pop-up-due-date-input').value;
	const priority = checkedPriority === null ? 0 : checkedPriority.value;

	hiddenActiveTask.editTitle(title);
	hiddenActiveTask.editDescription(description);
	hiddenActiveTask.editDueDate(dueDate);
	hiddenActiveTask.editPriority(priority);
	save(projects);
	renderTasks(project.tasks);
	renderTaskDetails(hiddenActiveTask);
}

// Checks radio button with tasks previous selection
function checkRadioBtn(task) {
	document.querySelector(`input[value="${task.priority}"`).checked = true;
}
