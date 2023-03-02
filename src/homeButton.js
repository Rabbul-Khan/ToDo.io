export const homeButton = () => {
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
