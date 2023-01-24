import "./main.css";
import { addTaskButton } from "./addTaskButton";
import { submitTaskButton } from "./submitTaskButton";
import { textAreaResize } from "./textAreaResize";
import { modalCancelButton } from "./modalCancelButton";
import { setCurrentDate } from "./setCurrentDate";
import { addProjectButton } from "./addProjectButton";
import { submitProjectButton } from "./submitProjectButton";

setCurrentDate();
addTaskButton();
addProjectButton();
textAreaResize();

submitTaskButton();
submitProjectButton();

modalCancelButton("add-project-modal__btn-cancel");
modalCancelButton("add-task-modal__btn-cancel");
