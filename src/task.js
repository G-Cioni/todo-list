export function createTask(title, description, dueDate, priority) {
	const proto = {
		addToProject: function (project) {
			project.append(this);
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
