import { renderProjectName } from "./renderProjectName";
import { Project } from "./project";
import { activeProject } from "./activeProject";
import { renderProjectTaskList } from "./renderProjectTaskList";
import { addTaskButton } from "./addTaskButton";
import { modalCancelButton } from "./modalCancelButton";
import { submitTaskButton } from "./submitTaskButton";

export const addProject = (projectName, projectId) => {
  const newProject = new Project(projectName);
  renderProjectName(newProject.name);
  renderProjectTaskList(projectId);
  activeProject();
  addTaskButton();
  modalCancelButton("add-task-modal__btn-cancel");
  submitTaskButton();
};
