import { getActiveProject, getVisibleTasks } from "./selectors";

const PRIORITY_CLASS = {
  High: "task-container__task-priority--high",
  Mid: "task-container__task-priority--mid",
  Low: "task-container__task-priority--low",
};

const createProjectNode = (project, isActive, allowDelete) => {
  const projectNode = document.createElement("div");
  projectNode.classList.add("project-container__project");
  projectNode.dataset.projectId = project.id;

  if (isActive) {
    projectNode.classList.add("active");
  }

  const nameAndIconNode = document.createElement("div");
  nameAndIconNode.classList.add("project-container__project-name-and-icon");

  const iconNode = document.createElement("span");
  iconNode.classList.add("sidebar__icon-project", "icon", "material-icons");
  iconNode.textContent = "radio_button_checked";

  const nameNode = document.createElement("div");
  nameNode.classList.add("project-container__project-name");
  nameNode.textContent = project.name;

  nameAndIconNode.append(iconNode, nameNode);

  if (allowDelete) {
    const deleteNode = document.createElement("span");
    deleteNode.classList.add("sidebar__icon-delete", "icon", "material-icons");
    deleteNode.dataset.action = "delete-project";
    deleteNode.dataset.projectId = project.id;
    deleteNode.textContent = "delete";
    nameAndIconNode.appendChild(deleteNode);
  }

  projectNode.appendChild(nameAndIconNode);
  return projectNode;
};

const createTaskNode = (task) => {
  const taskNode = document.createElement("div");
  taskNode.classList.add("task-container__task");
  taskNode.dataset.taskId = task.id;

  const priorityClass = PRIORITY_CLASS[task.priority] || PRIORITY_CLASS.Mid;
  taskNode.classList.add(priorityClass);

  if (task.completed) {
    taskNode.classList.add("task-container__task--completed");
  }

  const headerNode = document.createElement("div");
  headerNode.classList.add("task-container__task-header");

  const toggleNode = document.createElement("input");
  toggleNode.type = "checkbox";
  toggleNode.classList.add("task-container__toggle");
  toggleNode.checked = task.completed;
  toggleNode.dataset.action = "toggle-task";
  toggleNode.dataset.taskId = task.id;

  const titleNode = document.createElement("div");
  titleNode.classList.add("task-container__task-title");
  titleNode.textContent = task.title || "No Title";

  headerNode.append(toggleNode, titleNode);

  const descriptionNode = document.createElement("div");
  descriptionNode.classList.add("task-container__task-description");
  descriptionNode.textContent = task.description || "No description";

  const tagListNode = document.createElement("div");
  tagListNode.classList.add("task-container__tags");
  if (task.tags && task.tags.length) {
    task.tags.forEach((tag) => {
      const tagNode = document.createElement("span");
      tagNode.classList.add("task-container__tag");
      tagNode.textContent = tag;
      tagListNode.appendChild(tagNode);
    });
  }

  const footerNode = document.createElement("div");
  footerNode.classList.add("task-container__due-date-and-delete");

  const dueDateNode = document.createElement("div");
  dueDateNode.classList.add("task-container__task-due-date");
  if (!task.dueDate) {
    dueDateNode.textContent = "No due date set";
  } else {
    dueDateNode.textContent = `Due by ${task.dueDate}`;
  }

  const deleteIconNode = document.createElement("div");
  deleteIconNode.classList.add(
    "task-container__icons-delete",
    "icon",
    "material-icons"
  );
  deleteIconNode.dataset.action = "delete-task";
  deleteIconNode.dataset.taskId = task.id;
  deleteIconNode.textContent = "delete";

  footerNode.append(dueDateNode, deleteIconNode);
  taskNode.append(headerNode, descriptionNode, tagListNode, footerNode);

  return taskNode;
};

const renderProjects = (state) => {
  const container = document.querySelector(".sidebar__project-container");
  if (!container) {
    return;
  }

  container.innerHTML = "";
  state.projects.forEach((project) => {
    const node = createProjectNode(
      project,
      project.id === state.activeProjectId,
      project.id !== state.inboxProjectId
    );
    container.appendChild(node);
  });
};

const renderFilters = (state, rootNode) => {
  const activeProject = getActiveProject(state);
  const titleNode = rootNode.querySelector(".task-list__title");
  if (titleNode) {
    titleNode.textContent = activeProject ? activeProject.name : "Tasks";
  }

  const filterTabs = rootNode.querySelectorAll(".task-list__filter-tab");
  filterTabs.forEach((tab) => {
    const status = tab.dataset.filter;
    if (status === state.filters.status) {
      tab.classList.add("is-active");
    } else {
      tab.classList.remove("is-active");
    }
  });

  const searchInput = rootNode.querySelector(".task-list__search");
  if (searchInput) {
    searchInput.value = state.filters.searchText;
  }

  const tagInput = rootNode.querySelector(".task-list__tag-filter");
  if (tagInput) {
    tagInput.value = state.filters.tag;
  }
};

const renderTasks = (state, rootNode) => {
  const taskContainer = rootNode.querySelector(".task-container");
  if (!taskContainer) {
    return;
  }

  taskContainer.innerHTML = "";
  const tasks = getVisibleTasks(state);
  tasks.forEach((task) => {
    taskContainer.appendChild(createTaskNode(task));
  });

  const emptyNode = rootNode.querySelector(".task-list__empty");
  if (emptyNode) {
    emptyNode.style.display = tasks.length ? "none" : "block";
  }
};

export const renderApp = (state) => {
  renderProjects(state);

  const taskListRoot = document.querySelector(".task-list-container");
  if (!taskListRoot) {
    return;
  }

  renderFilters(state, taskListRoot);
  renderTasks(state, taskListRoot);
};
