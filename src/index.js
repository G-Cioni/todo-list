import './styles.css';
import { createTask } from './task';
import { createProject } from './project';

let task = createTask('first task', 'description', 'dueDate', 'priority');
let task2 = createTask('second task', 'description', 'dueDate', 'priority');

let project = createProject('first project');

task.addTask(project);
task2.addTask(project);

task2.removeTask(project);
console.table(project.tasks);
