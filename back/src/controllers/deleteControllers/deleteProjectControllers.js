const Project = require("../../models/project");

const deleteProjectIdController = async (projectId) => {
  try {
    const deleteProject = await Project.findByIdAndRemove(projectId);
    return deleteProject;
  } catch (error) {
    throw new Error("Error al eliminar el proyecto por ID");
  }
};

const deleteProjectNameController = async (projectName) => {
  try {
    const deleteProject = await Project.findOneAndRemove({ projectName });
    return deleteProject;
  } catch (error) {
    throw new Error("Error al eliminar el proyecto por nombre");
  }
};

module.exports = {
  deleteProjectIdController,
  deleteProjectNameController,
};
