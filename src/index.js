import './styles.css';
import { createTask } from './task';
import { createProject } from './project';
import { appendProject, appendTask } from './dom';

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

let personal = createProject('Personal');
let work = createProject('Work');
task.addTask(personal);
task2.addTask(work);

appendProject(personal);
appendProject(work);
appendTask(task);
appendTask(task2);
