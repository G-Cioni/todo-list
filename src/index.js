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
import { quickAdd } from './buttons';
import { save, load } from './localStorage';

renderProjects(projects);
console.log(activeProject);
renderTasks(activeProject.tasks);

selectProject(activeProject);
