// Have to add a complete variable and a function to toggle it in the proto

export function createTask(title, description, dueDate, priority) {
	const proto = {
		toggleDone: function () {
			this.isDone = !this.isDone;
		},
	};
	const isDone = false;
	const task = Object.assign(Object.create(proto), {
		title,
		description,
		dueDate,
		priority,
		isDone,
	});
	return task;
}
