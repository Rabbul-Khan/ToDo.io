export const getProjectName = () => {
  const projectNameNode = document.getElementsByClassName(
    "form__input-project-name"
  )[0];
  const projectName = projectNameNode.value;
  return projectName;
};
