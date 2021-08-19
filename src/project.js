export function createProject(title) {
	const proto = {
		addTask: function (task) {
			this.tasks.push(task);
		},

		removeTask: function (task) {
			const index = this.tasks.indexOf(task);
			this.tasks.splice(index, 1);
		},
	};
	const tasks = [];
	const project = Object.assign(Object.create(proto), {
		title,
		tasks: [],
	});
	return project;
}
