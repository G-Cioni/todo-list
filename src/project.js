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

let projects = load();

for (let i = 0; i < projects.length; i++) {
	projects[i] = createProject(projects[i].title, projects[i].tasks);
}

console.log(projects);

const hello = createProject('hello', []);
console.log(hello);
let activeProject;

setActiveProject(projects[0]);
console.log(projects[0]);
