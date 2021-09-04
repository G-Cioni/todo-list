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
			projects[i].tasks[a].isDone
		);
	}
}

// Creates default "Personal" project if projects array is empty when loading app
if (projects[0] === undefined) {
	newProject('Personal');
	newProject('Work');
}

// Sets Active Project to the first one in projects array
setActiveProject(projects[0]);

// Renders Projects upon loading the app
renderProjects(projects);

// Renders Tasks upon loading the app
renderTasks(activeProject.tasks);

// Selects the active project and shows it on the Tasks-Panel
selectProject(activeProject);
