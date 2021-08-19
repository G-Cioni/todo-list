import './styles.css';
import { createTask } from './task';
import { createProject } from './project';
import { renderTasks, renderProjects, selectProject } from './dom';

let personal = createProject('Personal');
let work = createProject('Work');

const projects = [personal, work];

let activeProject = personal;

let task = createTask(
	'Pay bills',
	'electric, water, wifi',
	'23/08/2021',
	'high'
);

let task2 = createTask(
	'Buy smarthphone',
	'buy a new smartphone for work',
	'19/12/2021',
	'low'
);

personal.addTask(task);
work.addTask(task2);

renderProjects(projects);
renderTasks(activeProject.tasks);

selectProject(activeProject);
