/* eslint-disable import/no-mutable-exports */
import { load } from './localStorage';
import { createTask } from './task';

// Project Factory Function
function createProject(title, tasks) {
  const proto = {
    addTask(task) {
      this.tasks.push(task);
    },

    removeTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    },
    editName(newTitle) {
      this.title = newTitle;
    },
  };
  const project = Object.assign(Object.create(proto), {
    title,
    tasks,
  });
  return project;
}

let projects;

// Defines the active Project
let activeProject;

// Hidden active project

let hiddenActiveProject;

// Sets the Active Project
function setActiveProject(project) {
  activeProject = project;
}
// Removes project from Projects array
function removeProject(index) {
  projects.splice(index, 1);
}

// Loads localStorage
projects = load();

// Returns an array with all tasks
function createAllTasksArray() {
  return projects.reduce((array, project) => {
    project.tasks.forEach((task) => {
      createTask(task.title);
      array.push(task);
    });
    return array;
  }, []);
}

// Creates allTasksProject
const allTasksProject = createProject('All Tasks', createAllTasksArray());

// Sets the Hidden active project (needed to edit project)

function setHiddenActiveProject(project) {
  hiddenActiveProject = project;
}
export {
  activeProject,
  hiddenActiveProject,
  projects,
  createProject,
  setActiveProject,
  setHiddenActiveProject,
  removeProject,
  createAllTasksArray,
  allTasksProject,
};
