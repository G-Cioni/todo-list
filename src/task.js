// Task Factory Function
export function createTask(title, description, dueDate, priority, isDone) {
	const proto = {
		toggleDone: function () {
			this.isDone = !this.isDone;
		},
	};
	const task = Object.assign(Object.create(proto), {
		title,
		description,
		dueDate,
		priority,
		isDone,
	});
	return task;
}
