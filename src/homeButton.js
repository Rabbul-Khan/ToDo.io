export const homeButton = (onHome) => {
  const homeButtonNode = document.getElementsByClassName(
    "nav__icons-home icon material-icons"
  )[0];

  homeButtonNode.addEventListener("click", () => {
    if (typeof onHome === "function") {
      onHome();
    }
  });
};
