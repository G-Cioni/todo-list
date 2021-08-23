import { projects, createProject } from './project';
export { save, load };

function save(projects) {
	localStorage.setItem('projects', JSON.stringify(projects));
}

function load() {
	let jsonProjects = JSON.parse(localStorage.getItem('projects'));
	console.log(jsonProjects);
	return jsonProjects.reduce((projects, project) => {
		createProject(project.title, project.tasks);
		projects.push(project);
		console.log(project.title);
		return projects;
	}, []);
}
