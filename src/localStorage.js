import { projects, createProject } from './project';
export { save, load };

// Saves to localStorage
function save(projects) {
	localStorage.setItem('projects', JSON.stringify(projects));
}

// Loads from localStorage
function load() {
	return JSON.parse(localStorage.getItem('projects'));
}
