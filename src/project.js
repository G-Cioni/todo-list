export { activeProject, projects, createProject, setActiveProject };
import { load } from './localStorage';

function createProject(title, tasks) {
	const proto = {
		addTask: function (task) {
			this.tasks.push(task);
		},

		removeTask: function (task) {
			const index = this.tasks.indexOf(task);
			this.tasks.splice(index, 1);
		},
	};
	const project = Object.assign(Object.create(proto), {
		title,
		tasks,
	});
	return project;
}

function setActiveProject(project) {
	activeProject = project;
}

const projects = load();

console.log(projects[0]);

let activeProject;

setActiveProject(projects[0]);
