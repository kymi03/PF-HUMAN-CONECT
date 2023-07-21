const projectModel = require("../../models/project");
const projectsController = async () => {
  try {
    const project = await projectModel.find({});
    return project;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = projectsController;