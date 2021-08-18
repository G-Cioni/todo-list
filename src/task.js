export function createTask(title, description, dueDate, priority) {
	const proto = {
		addTask: function (project) {
			project.tasks.push(this);
		},

		removeTask: function (project) {
			const index = project.tasks.indexOf(this);
			project.tasks.splice(index, 1);
		},
	};

	const task = Object.assign(Object.create(proto), {
		title,
		description,
		dueDate,
		priority,
	});

	return task;
}
