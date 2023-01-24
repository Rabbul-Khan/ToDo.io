export const activeProject = () => {
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
