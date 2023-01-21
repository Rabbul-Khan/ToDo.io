import "./main.css";
import { addTaskButton } from "./addTaskButton";
import { submitButton } from "./submitButton";
import { textAreaResize } from "./textAreaResize";
import { modalCancelButton } from "./modalCancelButton";
import { setCurrentDate } from "./setCurrentDate";

setCurrentDate();
addTaskButton();
textAreaResize();
submitButton();
modalCancelButton();
