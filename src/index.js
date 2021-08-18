import './styles.css';
import { createTask } from './task';
import { createProject } from './project';

let task = createTask('first task', 'description', 'dueDate', 'priority');
let task2 = createTask('second task', 'description', 'dueDate', 'priority');

let project = createProject('first project');

task.addToProject(project);
task2.addToProject(project);

console.log(project.tasks[1].title);
