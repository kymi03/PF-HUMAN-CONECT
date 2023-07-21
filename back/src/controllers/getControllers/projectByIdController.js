const projectModel = require("../../models/project");
const projectByIdController = async (id) => {
  try {
    const project = await projectModel.findById(id);
    return project;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = projectByIdController;
