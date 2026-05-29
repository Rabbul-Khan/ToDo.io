import { createId } from "./state";

const normalizeName = (name, fallback) => {
  if (typeof name !== "string") {
    return fallback;
  }
  const trimmed = name.trim();
  return trimmed ? trimmed : fallback;
};

const normalizeTags = (rawTags) => {
  if (Array.isArray(rawTags)) {
    return rawTags
      .map((tag) => tag.trim())
      .filter(Boolean)
      .filter((tag, index, list) => list.indexOf(tag) === index);
  }

  if (typeof rawTags !== "string") {
    return [];
  }

  return rawTags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .filter((tag, index, list) => list.indexOf(tag) === index);
};

const normalizeDueDate = (dueDate) => {
  if (typeof dueDate !== "string") {
    return "";
  }

  if (!dueDate || dueDate.includes("undefined")) {
    return "";
  }

  return dueDate;
};

export const addProject = (state, name) => {
  const projectName = normalizeName(name, "Untitled project");
  const project = { id: createId(), name: projectName };

  return {
    ...state,
    projects: [...state.projects, project],
    activeProjectId: project.id,
  };
};

export const deleteProject = (state, projectId) => {
  if (!projectId || projectId === state.inboxProjectId) {
    return state;
  }

  const projects = state.projects.filter((project) => project.id !== projectId);
  const tasks = state.tasks.filter((task) => task.projectId !== projectId);
  const fallbackProjectId =
    state.activeProjectId === projectId
      ? state.inboxProjectId
      : state.activeProjectId;

  return {
    ...state,
    projects,
    tasks,
    activeProjectId: fallbackProjectId,
  };
};

export const setActiveProject = (state, projectId) => {
  if (!projectId) {
    return state;
  }

  const exists = state.projects.some((project) => project.id === projectId);
  if (!exists) {
    return state;
  }

  return {
    ...state,
    activeProjectId: projectId,
  };
};

export const addTask = (state, taskInput) => {
  const input = taskInput || {};
  const task = {
    id: createId(),
    projectId: state.activeProjectId,
    title: normalizeName(input.title, "No Title"),
    description: typeof input.description === "string" ? input.description : "",
    dueDate: normalizeDueDate(input.dueDate),
    priority: input.priority || "Mid",
    tags: normalizeTags(input.tags),
    completed: false,
  };

  return {
    ...state,
    tasks: [...state.tasks, task],
  };
};

export const deleteTask = (state, taskId) => {
  if (!taskId) {
    return state;
  }

  return {
    ...state,
    tasks: state.tasks.filter((task) => task.id !== taskId),
  };
};

export const toggleTask = (state, taskId) => {
  if (!taskId) {
    return state;
  }

  const tasks = state.tasks.map((task) => {
    if (task.id !== taskId) {
      return task;
    }

    return {
      ...task,
      completed: !task.completed,
    };
  });

  return {
    ...state,
    tasks,
  };
};

export const clearCompleted = (state) => {
  const tasks = state.tasks.filter((task) => {
    if (task.projectId !== state.activeProjectId) {
      return true;
    }

    return !task.completed;
  });

  return {
    ...state,
    tasks,
  };
};

export const setStatusFilter = (state, status) => {
  const allowed = ["all", "active", "completed"];
  const nextStatus = allowed.includes(status) ? status : "all";

  return {
    ...state,
    filters: {
      ...state.filters,
      status: nextStatus,
    },
  };
};

export const setSearchText = (state, searchText) => ({
  ...state,
  filters: {
    ...state.filters,
    searchText: typeof searchText === "string" ? searchText : "",
  },
});

export const setTagFilter = (state, tag) => ({
  ...state,
  filters: {
    ...state.filters,
    tag: typeof tag === "string" ? tag : "",
  },
});
