export const sidebarButton = () => {
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
