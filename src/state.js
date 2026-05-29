const DEFAULT_FILTERS = {
  status: "all",
  searchText: "",
  tag: "",
};

export const createId = () =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;

export const createInitialState = () => {
  const inboxId = createId();

  return {
    inboxProjectId: inboxId,
    projects: [{ id: inboxId, name: "Inbox" }],
    tasks: [],
    activeProjectId: inboxId,
    filters: { ...DEFAULT_FILTERS },
  };
};

const ensureProjectList = (projects, inboxProjectId) => {
  const safeProjects = Array.isArray(projects) ? projects.slice() : [];
  const hasInbox = safeProjects.some((project) => project.id === inboxProjectId);

  if (!hasInbox) {
    safeProjects.unshift({ id: inboxProjectId, name: "Inbox" });
  }

  return safeProjects;
};

const normalizeTask = (task, fallbackProjectId) => {
  const title = typeof task.title === "string" ? task.title : task.name || "";
  const description = typeof task.description === "string" ? task.description : "";
  const priority = typeof task.priority === "string" ? task.priority : "Mid";
  const dueDate = typeof task.dueDate === "string" ? task.dueDate : "";
  const tags = Array.isArray(task.tags) ? task.tags : [];
  const completed = Boolean(task.completed);

  return {
    id: task.id || createId(),
    projectId: task.projectId || fallbackProjectId,
    title,
    description,
    priority,
    dueDate,
    tags,
    completed,
  };
};

export const ensureState = (rawState) => {
  if (!rawState || typeof rawState !== "object") {
    return createInitialState();
  }

  const inboxProjectId = rawState.inboxProjectId || createId();
  const projects = ensureProjectList(rawState.projects, inboxProjectId);
  const tasks = Array.isArray(rawState.tasks)
    ? rawState.tasks.map((task) => normalizeTask(task, inboxProjectId))
    : [];
  const activeProjectId = projects.some(
    (project) => project.id === rawState.activeProjectId
  )
    ? rawState.activeProjectId
    : inboxProjectId;
  const filters = {
    ...DEFAULT_FILTERS,
    ...(rawState.filters || {}),
  };

  return {
    inboxProjectId,
    projects,
    tasks,
    activeProjectId,
    filters,
  };
};
