import { projects, createProject } from './project';
export { save, load };

function save(projects) {
	localStorage.setItem('projects', JSON.stringify(projects));
}

function load() {
	return JSON.parse(localStorage.getItem('projects'));
}
