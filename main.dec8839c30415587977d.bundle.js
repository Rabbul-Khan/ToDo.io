/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/dateToString.js
// Converts the Date object to a string and outputs the date in the format: mmm/dd/yyyy.

const dateToString = (date) => {
  let dateString = date.toString();
  let dateStringArray = dateString.split(" ");
  return (
    dateStringArray[1] + " " + dateStringArray[2] + " " + dateStringArray[3]
  );
};

;// CONCATENATED MODULE: ./src/setCurrentDate.js
//Sets the current date on all the project pages.



const setCurrentDate = () => {
  const currentDate = new Date();
  const currentDateString = dateToString(currentDate);
  const currentDateNode = document.getElementsByClassName(
    "date-container__current-date"
  );

  for (let i = 0; i < currentDateNode.length; i++) {
    currentDateNode[i].textContent = currentDateString;
  }
};

;// CONCATENATED MODULE: ./src/homeButton.js
const homeButton = (onHome) => {
  const homeButtonNode = document.getElementsByClassName(
    "nav__icons-home icon material-icons"
  )[0];

  homeButtonNode.addEventListener("click", () => {
    if (typeof onHome === "function") {
      onHome();
    }
  });
};

;// CONCATENATED MODULE: ./src/toggleModal.js
//Makes the modal visible and hides the add task button and vice versa

const toggleModal = (className) => {
  const modalNode = document.getElementsByClassName(className);
  let btn;

  for (let i = 0; i < modalNode.length; i++) {
    if (className === "sidebar__modal") {
      btn = document.getElementsByClassName("add-project-btn")[i];
    } else if (className === "main-container__modal") {
      btn = document.getElementsByClassName("add-task-btn")[i];
    }

    if (modalNode[i].style.display === "block") {
      modalNode[i].style.display = "none";
      btn.style.display = "flex";
    } else {
      modalNode[i].style.display = "block";
      btn.style.display = "none";
    }
  }
};

;// CONCATENATED MODULE: ./src/navBarAddTaskButton.js


const navBarAddTaskButton = () => {
  const navBarAddTaskBtnNode = document.getElementsByClassName(
    "nav__icons-add icon material-icons"
  )[0];

  navBarAddTaskBtnNode.addEventListener("click", () => {
    toggleModal("main-container__modal");
  });
};

;// CONCATENATED MODULE: ./src/addTaskButton.js
//Clicking the add task button will hide the add task button and make the modal visible.



const addTaskButton = () => {
  const addTaskBtnNode = document.getElementsByClassName("add-task-btn");

  const lastAddTaskBtnNode = addTaskBtnNode[addTaskBtnNode.length - 1];

  lastAddTaskBtnNode.addEventListener("click", () => {
    toggleModal("main-container__modal");
  });

  // for (let i = 0; i < addTaskBtnNode.length; i++) {
  //   addTaskBtnNode[i].addEventListener("click", () => {
  //     toggleModal("main-container__modal");
  //   });
  // }
};

;// CONCATENATED MODULE: ./src/addProjectButton.js


const addProjectButton = () => {
  const addProjectButtonNode =
    document.getElementsByClassName("add-project-btn")[0];

  addProjectButtonNode.addEventListener("click", () => {
    toggleModal("sidebar__modal");
  });
};

;// CONCATENATED MODULE: ./src/modalCancelButton.js
// Clicking the cancel button on the modal closes the modal.



const modalCancelButton = (className) => {
  let modalCancelButtonNode;
  let classNameToggleModal;

  if (className === "add-project-modal__btn-cancel") {
    modalCancelButtonNode = document.getElementsByClassName(
      "add-project-modal__btn-cancel"
    );
    classNameToggleModal = "sidebar__modal";
  } else if (className === "add-task-modal__btn-cancel") {
    modalCancelButtonNode = document.getElementsByClassName(
      "add-task-modal__btn-cancel"
    );
    classNameToggleModal = "main-container__modal";
  }

  for (let i = 0; i < modalCancelButtonNode.length; i++) {
    if (modalCancelButtonNode[i].getAttribute("listener") !== "true") {
      modalCancelButtonNode[i].setAttribute("listener", "true");
      modalCancelButtonNode[i].addEventListener("click", () => {
        toggleModal(classNameToggleModal);
      });
    }
  }
};

;// CONCATENATED MODULE: ./src/sidebarButton.js
const sidebarButton = () => {
  const sidebarButtonNode = document.getElementsByClassName(
    "nav__icons-menu icon material-icons"
  )[0];
  const sidebarNode = document.getElementsByClassName(
    "main-container__sidebar"
  )[0];
  sidebarButtonNode.addEventListener("click", () => {
    if (sidebarNode.style.display === "block") {
      sidebarNode.style.display = "none";
    } else {
      sidebarNode.style.display = "block";
    }
  });
};

// if (sidebarButtonNode.style.display === "block")

;// CONCATENATED MODULE: ./src/getProjectName.js
const getProjectName = () => {
  const projectNameNode = document.getElementsByClassName(
    "form__input-project-name"
  )[0];
  const projectName = projectNameNode.value;
  return projectName;
};

;// CONCATENATED MODULE: ./src/submitProjectButton.js



const submitProjectButton = (onSubmit) => {
  const submitProjectButton = document.getElementsByClassName(
    "add-project-modal__btn-submit"
  )[0];
  submitProjectButton.addEventListener("click", () => {
    const projectName = getProjectName();

    if (typeof onSubmit === "function") {
      onSubmit(projectName);
    }

    toggleModal("sidebar__modal");

    const formNode = document.getElementsByClassName(
      "modal__add-project-form"
    )[0];
    formNode.reset();
  });
};

;// CONCATENATED MODULE: ./src/getDueDate.js
// Returns the due date set for the task.



const getDueDate = (dueDateNode) => {
  if (!dueDateNode || !dueDateNode.value) {
    return "";
  }

  const dueDate = new Date(dueDateNode.value);
  return dateToString(dueDate);
};

;// CONCATENATED MODULE: ./src/getPriority.js
// Returns the priority set for the task.

const getPriority = (priorityList) => {
  for (let i = 0; i < priorityList.length; i++) {
    if (priorityList[i].checked) {
      return priorityList[i].getAttribute("label");
    }
  }
};

;// CONCATENATED MODULE: ./src/submitTaskButton.js
// Once the submit button is clicked, the new task is created and the form modal is closed.




const submitTaskButton = (onSubmit) => {
  const submitButton = document.getElementsByClassName(
    "add-task-modal__btn-submit"
  );

  const latestIndex = submitButton.length - 1;

  const lastSubmitButton = submitButton[latestIndex];

  lastSubmitButton.addEventListener("click", () => {
    const modalContentNode = lastSubmitButton.closest(".modal__content");
    const taskName = modalContentNode.querySelector(
      ".form__input-task-name"
    ).value;

    const description = modalContentNode.querySelector(
      ".form__input-task-description"
    ).value;

    const dueDateNode = modalContentNode.getElementsByClassName(
      "form__input-due-date"
    )[0];
    const dueDate = getDueDate(dueDateNode);

    const priorityList = modalContentNode.getElementsByClassName(
      "form__input-priority"
    );
    const priority = getPriority(priorityList);

    const tagsInput = modalContentNode.querySelector(".form__input-task-tags");
    const tags = tagsInput ? tagsInput.value : "";

    if (typeof onSubmit === "function") {
      onSubmit({
        title: taskName,
        description,
        dueDate,
        priority,
        tags,
      });
    }

    toggleModal("main-container__modal");

    // Resets the previous inputs to the form. If the reset function is not used, then the previous task name, description etc. remain in the input fields when a new form is opened.
    const formNode = document.getElementsByClassName("modal__add-task-form")[
      latestIndex
    ];
    formNode.reset();
  });
};

;// CONCATENATED MODULE: ./src/textAreaResize.js
// This function allows the text area box (description) to dynamically increase in height to fit the content if required.

const textAreaResize = () => {
  const txHeight = 23;
  const tx = document.getElementsByTagName("textarea");

  for (let i = 0; i < tx.length; i++) {
    if (tx[i].value == "") {
      tx[i].setAttribute(
        "style",
        "height:" + txHeight + "px;overflow-y:hidden;"
      );
    } else {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
    }
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput(e) {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }
};

;// CONCATENATED MODULE: ./src/state.js
const DEFAULT_FILTERS = {
  status: "all",
  searchText: "",
  tag: "",
};

const createId = () =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;

const createInitialState = () => {
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

const ensureState = (rawState) => {
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

;// CONCATENATED MODULE: ./src/actions.js


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

const addProject = (state, name) => {
  const projectName = normalizeName(name, "Untitled project");
  const project = { id: createId(), name: projectName };

  return {
    ...state,
    projects: [...state.projects, project],
    activeProjectId: project.id,
  };
};

const deleteProject = (state, projectId) => {
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

const setActiveProject = (state, projectId) => {
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

const addTask = (state, taskInput) => {
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

const deleteTask = (state, taskId) => {
  if (!taskId) {
    return state;
  }

  return {
    ...state,
    tasks: state.tasks.filter((task) => task.id !== taskId),
  };
};

const toggleTask = (state, taskId) => {
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

const clearCompleted = (state) => {
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

const setStatusFilter = (state, status) => {
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

const setSearchText = (state, searchText) => ({
  ...state,
  filters: {
    ...state.filters,
    searchText: typeof searchText === "string" ? searchText : "",
  },
});

const setTagFilter = (state, tag) => ({
  ...state,
  filters: {
    ...state.filters,
    tag: typeof tag === "string" ? tag : "",
  },
});

;// CONCATENATED MODULE: ./src/storage.js
const STORAGE_KEY = "todo.state.v1";

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Failed to load state from localStorage", error);
    return null;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Failed to save state to localStorage", error);
  }
};

;// CONCATENATED MODULE: ./src/selectors.js
const getActiveProject = (state) =>
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

const getVisibleTasks = (state) => {
  const { status, searchText, tag } = state.filters;

  return state.tasks
    .filter((task) => task.projectId === state.activeProjectId)
    .filter((task) => matchesStatus(task, status))
    .filter((task) => matchesSearch(task.title || "", searchText))
    .filter((task) => matchesTag(task.tags || [], tag));
};

;// CONCATENATED MODULE: ./src/render.js


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

const renderApp = (state) => {
  renderProjects(state);

  const taskListRoot = document.querySelector(".task-list-container");
  if (!taskListRoot) {
    return;
  }

  renderFilters(state, taskListRoot);
  renderTasks(state, taskListRoot);
};

;// CONCATENATED MODULE: ./src/index.js
















let state = ensureState(loadState() || createInitialState());

const commitState = (nextState) => {
	state = nextState;
	saveState(state);
	renderApp(state);
	setCurrentDate();
};

const updateState = (action) => {
	const nextState = action(state);
	commitState(nextState);
};

const bindProjectEvents = () => {
	const projectContainer = document.querySelector(".sidebar__project-container");
	if (!projectContainer) {
		return;
	}

	projectContainer.addEventListener("click", (event) => {
		const deleteButton = event.target.closest("[data-action='delete-project']");
		if (deleteButton) {
			const projectId = deleteButton.dataset.projectId;
			updateState((current) => deleteProject(current, projectId));
			return;
		}

		const projectNode = event.target.closest(".project-container__project");
		if (projectNode && projectNode.dataset.projectId) {
			updateState((current) =>
				setActiveProject(current, projectNode.dataset.projectId)
			);
		}
	});
};

const bindTaskEvents = () => {
	const taskListRoot = document.querySelector(".task-list-container");
	if (!taskListRoot) {
		return;
	}

	taskListRoot.addEventListener("click", (event) => {
		const deleteButton = event.target.closest("[data-action='delete-task']");
		if (deleteButton) {
			updateState((current) => deleteTask(current, deleteButton.dataset.taskId));
			return;
		}

		const filterTab = event.target.closest(".task-list__filter-tab");
		if (filterTab) {
			updateState((current) => setStatusFilter(current, filterTab.dataset.filter));
			return;
		}

		const clearButton = event.target.closest(".task-list__clear-completed");
		if (clearButton) {
			updateState((current) => clearCompleted(current));
		}
	});

	taskListRoot.addEventListener("change", (event) => {
		const target = event.target;
		if (target.matches("[data-action='toggle-task']")) {
			updateState((current) => toggleTask(current, target.dataset.taskId));
		}
	});

	taskListRoot.addEventListener("input", (event) => {
		const target = event.target;
		if (target.matches(".task-list__search")) {
			updateState((current) => setSearchText(current, target.value));
		}

		if (target.matches(".task-list__tag-filter")) {
			updateState((current) => setTagFilter(current, target.value));
		}
	});
};

homeButton(() => {
	updateState((current) => setActiveProject(current, current.inboxProjectId));
});
sidebarButton();
navBarAddTaskButton();
addTaskButton();
addProjectButton();
textAreaResize();
modalCancelButton("add-project-modal__btn-cancel");
modalCancelButton("add-task-modal__btn-cancel");

submitProjectButton((name) => {
	updateState((current) => addProject(current, name));
});

submitTaskButton((taskInput) => {
	updateState((current) => addTask(current, taskInput));
});

bindProjectEvents();
bindTaskEvents();
commitState(state);

/******/ })()
;