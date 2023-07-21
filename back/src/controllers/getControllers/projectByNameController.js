const projectModel = require("../../models/project");
const projectByNameController = async (name) => {
    try {
        const project = await projectModel.findOne({name});
        return project;
      } catch (error) {
        throw new Error(error);
      }
}

module.exports = projectByNameController;