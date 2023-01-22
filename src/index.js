import "./main.css";
import { addTaskButton } from "./addTaskButton";
import { submitButton } from "./submitButton";
import { textAreaResize } from "./textAreaResize";
import { modalCancelButton } from "./modalCancelButton";
import { setCurrentDate } from "./setCurrentDate";
import { addProjectButton } from "./addProjectButton";

setCurrentDate();
addTaskButton();
addProjectButton();
textAreaResize();

submitButton("sidebar-btn-submit");
submitButton("add-task-modal__btn-submit");

modalCancelButton("add-project-modal__btn-cancel");
modalCancelButton("add-task-modal__btn-cancel");
