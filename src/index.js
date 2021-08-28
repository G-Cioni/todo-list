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

// Renders Projects upon loading the app
renderProjects(projects);

// Renders Tasks upon loading the app
renderTasks(activeProject.tasks);

// Selects the active project and shows it on the Tasks-Panel
selectProject(activeProject);
