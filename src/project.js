export {
	activeProject,
	projects,
	createProject,
	personal,
	work,
	setActiveProject,
};

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
let personal = createProject('Personal', []);
let work = createProject('Work', []);
const projects = [personal, work];

let activeProject;

setActiveProject(personal);
