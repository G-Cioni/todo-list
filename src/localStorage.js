// Saves to localStorage
function save(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Loads from localStorage
function load() {
  const projects = JSON.parse(localStorage.getItem('projects'));
  return projects === null ? [] : projects;
}

export { save, load };
