/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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

;// CONCATENATED MODULE: ./src/dateToString.js
// Converts the Date object to a string and outputs the date in the format: mmm/dd/yyyy.

const dateToString = (date) => {
  let dateString = date.toString();
  let dateStringArray = dateString.split(" ");
  return (
    dateStringArray[1] + " " + dateStringArray[2] + " " + dateStringArray[3]
  );
};

;// CONCATENATED MODULE: ./src/getDueDate.js
// Returns the due date set for the task.



const getDueDate = (dueDateNode) => {
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

;// CONCATENATED MODULE: ./src/renderTask.js
// Outputs the task title and description on the task list and sets the color according to the priority.

const renderTask = (title, description, priority, dueDate) => {
  const sideBarProjectContainerChildren = document.getElementsByClassName(
    "sidebar__project-container"
  )[0].children;

  for (let i = 0; i < sideBarProjectContainerChildren.length; i++) {
    if (sideBarProjectContainerChildren[i].classList.contains("active")) {
      const taskContainerNode =
        document.getElementsByClassName("task-container")[i];
      const newTaskNode = document.createElement("div");
      newTaskNode.classList.add("task-container__task");

      const titleNode = document.createElement("div");
      titleNode.classList.add("task-container__task-title");
      if (title) {
        titleNode.textContent = title;
      } else {
        titleNode.textContent = "No Title";
      }

      const descriptionNode = document.createElement("div");
      descriptionNode.classList.add("task-container__task-description");
      if (description) {
        descriptionNode.textContent = description;
      } else {
        descriptionNode.textContent = "No description";
      }

      const dueDateAndDeleteNode = document.createElement("div");
      dueDateAndDeleteNode.classList.add("task-container__due-date-and-delete");

      const dueDateNode = document.createElement("div");
      dueDateNode.classList.add("task-container__task-due-date");
      if (dueDate === "Date undefined undefined") {
        dueDateNode.textContent = "No due date set";
      } else {
        dueDateNode.textContent = `Due by ${dueDate}`;
      }

      const deleteIconNode = document.createElement("div");
      deleteIconNode.classList.add(
        "task-container__icons-delete",
        "icon",
        "material-icons"
      );
      deleteIconNode.setAttribute("listener", "false");
      deleteIconNode.textContent = "delete";

      if (priority === "High") {
        newTaskNode.classList.add("task-container__task-priority--high");
      } else if (priority === "Mid") {
        newTaskNode.classList.add("task-container__task-priority--mid");
      } else {
        newTaskNode.classList.add("task-container__task-priority--low");
      }

      dueDateAndDeleteNode.append(dueDateNode, deleteIconNode);

      newTaskNode.append(titleNode, descriptionNode, dueDateAndDeleteNode);
      taskContainerNode.appendChild(newTaskNode);
    }
  }
};

;// CONCATENATED MODULE: ./src/task.js
// Task Class.

class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

;// CONCATENATED MODULE: ./src/addTask.js
// Creates a new Task object.




const addTask = (name, description, dueDate, priority) => {
  const newTask = new Task(name, description, dueDate, priority);
  renderTask(
    newTask.name,
    newTask.description,
    newTask.priority,
    newTask.dueDate
  );
};

;// CONCATENATED MODULE: ./src/deleteTaskButton.js
// When the delete button is clicked the task is deleted.

const deleteTaskButton = () => {
  const deleteTaskButtonNode = document.getElementsByClassName(
    "task-container__icons-delete"
  );

  for (let i = 0; i < deleteTaskButtonNode.length; i++) {
    if (deleteTaskButtonNode[i].getAttribute("listener") !== "true") {
      deleteTaskButtonNode[i].addEventListener("click", (event) => {
        const taskToRemove = event.target.parentElement.parentElement;
        taskToRemove.remove();
      });
      deleteTaskButtonNode[i].setAttribute("listener", "true");
    }
  }
};

;// CONCATENATED MODULE: ./src/submitTaskButton.js
// Once the submit button is clicked, the new task is created and the form modal is closed.






const submitTaskButton = () => {
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

    addTask(taskName, description, dueDate, priority);

    // Add event listener to the delete button.
    deleteTaskButton();

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

;// CONCATENATED MODULE: ./src/addProjectButton.js


const addProjectButton = () => {
  const addProjectButtonNode =
    document.getElementsByClassName("add-project-btn")[0];

  addProjectButtonNode.addEventListener("click", () => {
    toggleModal("sidebar__modal");
  });
};

;// CONCATENATED MODULE: ./src/renderProjectName.js
const renderProjectName = (projectName) => {
  const projectContainerNode = document.getElementsByClassName(
    "sidebar__project-container"
  )[0];
  const newProjectNode = document.createElement("div");
  newProjectNode.classList.add("project-container__project");

  const projectNameIconNode = document.createElement("div");
  projectNameIconNode.classList.add("project-container__project-name-and-icon");

  const projectIconNode = document.createElement("span");
  projectIconNode.classList.add(
    "sidebar__icon-project",
    "icon",
    "material-icons"
  );
  projectIconNode.textContent = "radio_button_checked";

  const nameNode = document.createElement("div");
  nameNode.classList.add("project-container__project-name");
  nameNode.textContent = projectName;

  const deleteIconNode = document.createElement("span");
  deleteIconNode.classList.add(
    "sidebar__icon-delete",
    "icon",
    "material-icons"
  );
  deleteIconNode.setAttribute("listener", "false");
  deleteIconNode.textContent = "delete";

  projectNameIconNode.append(projectIconNode, nameNode, deleteIconNode);
  newProjectNode.append(projectNameIconNode);
  projectContainerNode.appendChild(newProjectNode);
};

;// CONCATENATED MODULE: ./src/project.js
class Project {
  constructor(projectName) {
    this.name = projectName;
  }
}

;// CONCATENATED MODULE: ./src/activeProject.js
const activeProject = () => {
  const projectNode = document.getElementsByClassName(
    "project-container__project"
  );

  if (projectNode.length === 2) {
    projectNode[0].addEventListener("click", () => {
      for (let j = 0; j < projectNode.length; j++) {
        projectNode[j].classList.remove("active");
      }
      projectNode[0].classList.add("active");
    });
  }

  for (let j = 0; j < projectNode.length; j++) {
    projectNode[j].classList.remove("active");
  }

  const latestProjectNode = projectNode[projectNode.length - 1];
  latestProjectNode.classList.add("active");

  latestProjectNode.addEventListener("click", () => {
    for (let j = 0; j < projectNode.length; j++) {
      projectNode[j].classList.remove("active");
    }
    latestProjectNode.classList.add("active");
  });

  const mainContainerMainContentNodeChildren = document.getElementsByClassName(
    "main-container__main-content"
  )[0].children;

  if (mainContainerMainContentNodeChildren.length === 2) {
    projectNode[0].addEventListener("click", () => {
      for (let j = 0; j < mainContainerMainContentNodeChildren.length; j++) {
        mainContainerMainContentNodeChildren[j].classList.remove("active");
      }
      mainContainerMainContentNodeChildren[0].classList.add("active");
    });
  }

  for (let j = 0; j < mainContainerMainContentNodeChildren.length; j++) {
    mainContainerMainContentNodeChildren[j].classList.remove("active");
  }

  const latestTaskListContainer =
    mainContainerMainContentNodeChildren[
      mainContainerMainContentNodeChildren.length - 1
    ];
  latestTaskListContainer.classList.add("active");

  latestProjectNode.addEventListener("click", () => {
    for (let j = 0; j < mainContainerMainContentNodeChildren.length; j++) {
      mainContainerMainContentNodeChildren[j].classList.remove("active");
    }
    latestTaskListContainer.classList.add("active");
    // const mainContainerModalNodes = document.getElementsByClassName(
    //   "main-container__modal"
    // );

    // for (let i = 0; i < mainContainerModalNodes.length; i++) {
    //   mainContainerModalNodes[i].style.display = "none";
    // }
  });
};

//   for (let i = 0; i < projectNode.length; i++) {
//     projectNode[i].addEventListener("click", () => {
//       for (let j = 0; j < projectNode.length; j++) {
//         projectNode[j].classList.remove("active");
//         console.log(projectNode);
//         // const projectNameNode = document.getElementsByClassName(
//         //   "project-container__project-name"
//         // )[j];
//         // projectNameNode.parentNode.classList.remove("active");
//       }

//       const activeProjectNode = document.getElementsByClassName(
//         "project-container__project"
//       )[i];
//       activeProjectNode.classList.add("active");

//       const maincContainerMainContentNodeChildren =
//         document.getElementsByClassName("main-container__main-content")[0]
//           .children;

//       for (let j = 0; j < maincContainerMainContentNodeChildren.length; j++) {
//         maincContainerMainContentNodeChildren[j].style.display = "none";
//       }

//       maincContainerMainContentNodeChildren[i].style.display = "block";
//     });
//   }
// };

;// CONCATENATED MODULE: ./src/renderProjectTaskList.js


const renderProjectTaskList = (projectId) => {
  const template = document.querySelector("template");
  const content = template.content.cloneNode(true);

  const taskContainerNode = content.querySelector(".task-list-container");
  taskContainerNode.setAttribute("UID", projectId);

  const mainContentNode = document.getElementsByClassName(
    "main-container__main-content"
  )[0];

  mainContentNode.appendChild(content);
  setCurrentDate();

  // const projectTaskLists = mainContentNode.children;
  // for (let i = 0; i < projectTaskLists.length; i++) {
  //   projectTaskLists[i].style.display = "none";
  // }
};

;// CONCATENATED MODULE: ./src/addProject.js








const addProject = (projectName, projectId) => {
  const newProject = new Project(projectName);
  renderProjectName(newProject.name);
  renderProjectTaskList(projectId);
  activeProject();
  addTaskButton();
  modalCancelButton("add-task-modal__btn-cancel");
  submitTaskButton();
};

;// CONCATENATED MODULE: ./src/getProjectName.js
const getProjectName = () => {
  const projectNameNode = document.getElementsByClassName(
    "form__input-project-name"
  )[0];
  const projectName = projectNameNode.value;
  return projectName;
};

;// CONCATENATED MODULE: ./src/deleteProjectButton.js
const deleteProjectButton = (projectId) => {
  const deleteProjectButtonNode = document.getElementsByClassName(
    "sidebar__icon-delete"
  );

  for (let i = 0; i < deleteProjectButtonNode.length; i++) {
    if (deleteProjectButtonNode[i].getAttribute("listener") !== "true") {
      deleteProjectButtonNode[i].addEventListener("click", (event) => {
        const projectToRemove = event.target.closest(
          ".project-container__project"
        );

        // if (projectToRemove.classList.contains("active")) {
        // projectToRemove.classList.remove("active");
        // const closestProjectFromProjectToRemove =
        //   projectToRemove.previousSibling;
        // closestProjectFromProjectToRemove.classList.add("active");
        // console.log(closestProjectFromProjectToRemove);
        // }
        // projectToRemove.classList.remove("active");

        // const inbox = document.getElementsByClassName("inbox")[0];
        // inbox.classList.add("active");

        projectToRemove.remove();
        const taskListContainer = document.getElementsByClassName(
          "task-list-container"
        );

        for (let i = 0; i < taskListContainer.length; i++) {
          if (taskListContainer[i].getAttribute("UID") === projectId) {
            taskListContainer[i].remove();
          }
        }
      });
      deleteProjectButtonNode[i].setAttribute("listener", "true");
    }
  }
};

;// CONCATENATED MODULE: ./src/submitProjectButton.js





const submitProjectButton = () => {
  const submitProjectButton = document.getElementsByClassName(
    "add-project-modal__btn-submit"
  )[0];
  submitProjectButton.addEventListener("click", () => {
    const projectName = getProjectName();
    const projectId =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
    addProject(projectName, projectId);

    deleteProjectButton(projectId);

    toggleModal("sidebar__modal");

    const formNode = document.getElementsByClassName(
      "modal__add-project-form"
    )[0];
    formNode.reset();
  });
};

;// CONCATENATED MODULE: ./src/homeButton.js
const homeButton = () => {
  const homeButtonNode = document.getElementsByClassName(
    "nav__icons-home icon material-icons"
  )[0];

  homeButtonNode.addEventListener("click", () => {
    const allProjectNodes = document.getElementsByClassName(
      "project-container__project"
    );

    allProjectNodes[0].classList.add("active");

    for (let i = 1; i < allProjectNodes.length; i++) {
      allProjectNodes[i].classList.remove("active");
    }

    const allTaskListNodes = document.getElementsByClassName(
      "task-list-container"
    );

    allTaskListNodes[0].classList.add("active");

    for (let i = 1; i < allTaskListNodes.length; i++) {
      allTaskListNodes[i].classList.remove("active");
    }
  });
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

;// CONCATENATED MODULE: ./src/navBarAddTaskButton.js


const navBarAddTaskButton = () => {
  const navBarAddTaskBtnNode = document.getElementsByClassName(
    "nav__icons-add icon material-icons"
  )[0];

  navBarAddTaskBtnNode.addEventListener("click", () => {
    toggleModal("main-container__modal");
  });
};

;// CONCATENATED MODULE: ./src/index.js












homeButton();
sidebarButton();
navBarAddTaskButton();

setCurrentDate();
addTaskButton();
addProjectButton();
textAreaResize();

submitTaskButton();
submitProjectButton();

modalCancelButton("add-project-modal__btn-cancel");
modalCancelButton("add-task-modal__btn-cancel");

/******/ })()
;