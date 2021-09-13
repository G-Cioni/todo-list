// Task Factory Function
function createTask(title, description, dueDate, priority, isDone, id) {
  const proto = {
    editTitle(newTitle) {
      this.title = newTitle;
    },
    editDescription(newDescription) {
      this.description = newDescription;
    },
    editDueDate(newDueDate) {
      this.dueDate = newDueDate;
    },
    editPriority(newPriority) {
      this.priority = newPriority;
    },
    toggleDone() {
      this.isDone = !this.isDone;
    },
  };
  const task = Object.assign(Object.create(proto), {
    title,
    description,
    dueDate,
    priority,
    isDone,
    id,
  });
  return task;
}

// Hidden active task
// eslint-disable-next-line import/no-mutable-exports
let hiddenActiveTask;

// Sets the Hidden task project (needed to edit task)
function setHiddenActiveTask(task) {
  hiddenActiveTask = task;
}
export { hiddenActiveTask, createTask, setHiddenActiveTask };
