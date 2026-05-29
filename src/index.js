import "./main.css";
import { setCurrentDate } from "./setCurrentDate";
import { homeButton } from "./homeButton";
import { navBarAddTaskButton } from "./navBarAddTaskButton";
import { addTaskButton } from "./addTaskButton";
import { addProjectButton } from "./addProjectButton";
import { modalCancelButton } from "./modalCancelButton";
import { sidebarButton } from "./sidebarButton";
import { submitProjectButton } from "./submitProjectButton";
import { submitTaskButton } from "./submitTaskButton";
import { textAreaResize } from "./textAreaResize";
import {
	addProject,
	addTask,
	clearCompleted,
	deleteProject,
	deleteTask,
	setActiveProject,
	setSearchText,
	setStatusFilter,
	setTagFilter,
	toggleTask,
} from "./actions";
import { ensureState, createInitialState } from "./state";
import { loadState, saveState } from "./storage";
import { renderApp } from "./render";

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
