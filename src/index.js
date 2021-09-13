import './styles.css';
import { createTask } from './task';
import {
	activeProject,
	projects,
	setActiveProject,
	createProject,
	personal,
	work,
} from './project';
import { renderTasks, renderProjects, selectProject } from './dom';
import { quickAdd, newProject } from './buttons';
import { save, load } from './localStorage';

// Recreates all Projects and Tasks with working __proto__ after loading it from localStorage
for (let i = 0; i < projects.length; i++) {
	projects[i] = createProject(projects[i].title, projects[i].tasks);
	for (let a = 0; a < projects[i].tasks.length; a++) {
		projects[i].tasks[a] = createTask(
			projects[i].tasks[a].title,
			projects[i].tasks[a].description,
			projects[i].tasks[a].dueDate,
			projects[i].tasks[a].priority,
			projects[i].tasks[a].isDone,
			projects[i].tasks[a].id
		);
	}
}

// Creates default "Personal" project if projects array is empty when loading app
if (projects[0] === undefined) {
	newProject('Instructions');
	newProject('Personal');
	projects[0].addTask(
		createTask(
			'Projects',
			'You can create new projects and edit their names from the Projects Panel',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	projects[0].addTask(
		createTask(
			'Tasks',
			'You can create tasks for each project to stay more organized. Either add a task quickly or click on "+ Create Task"',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	projects[0].addTask(
		createTask(
			'Complete and delete tasks',
			'You can also set a task to done or completely remove a task by clicking the buttons on the relative task. Try it out now! first set this task to done and then delete it.',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	projects[0].addTask(
		createTask(
			'Details',
			'In the panel from which you are currently reading you can view all the details of a selected task and also edit it. The only required field is the title',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	projects[0].addTask(
		createTask(
			'Delete instructions',
			'You are all set. Go ahead and delete the instructions project and start using the todo list!',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	save(projects);
	renderTasks(projects[0].tasks);
}

// Sets Active Project to the first one in projects array
setActiveProject(projects[0]);

// Renders Projects upon loading the app
renderProjects(projects);

// Renders Tasks upon loading the app
renderTasks(activeProject.tasks);

// Selects the active project and shows it on the Tasks-Panel
selectProject(activeProject);
