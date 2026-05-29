export const getActiveProject = (state) =>
  state.projects.find((project) => project.id === state.activeProjectId) ||
  state.projects[0];

const matchesSearch = (title, searchText) => {
  if (!searchText) {
    return true;
  }

  return title.toLowerCase().includes(searchText.toLowerCase());
};

const matchesTag = (tags, tagFilter) => {
  if (!tagFilter) {
    return true;
  }

  const filter = tagFilter.toLowerCase();
  return tags.some((tag) => tag.toLowerCase().includes(filter));
};

const matchesStatus = (task, status) => {
  if (status === "active") {
    return !task.completed;
  }

  if (status === "completed") {
    return task.completed;
  }

  return true;
};

export const getVisibleTasks = (state) => {
  const { status, searchText, tag } = state.filters;

  return state.tasks
    .filter((task) => task.projectId === state.activeProjectId)
    .filter((task) => matchesStatus(task, status))
    .filter((task) => matchesSearch(task.title || "", searchText))
    .filter((task) => matchesTag(task.tags || [], tag));
};
