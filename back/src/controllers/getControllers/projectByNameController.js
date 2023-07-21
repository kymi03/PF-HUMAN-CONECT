const projectModel = require("../../models/project");
const projectByNameController = async (name) => {
  // Crear una expresión regular insensible a mayúsculas y minúsculas con el nombre.
  const regex = new RegExp(name, "i");
  try {
    const project = await projectModel.find({ name: { $regex: regex } });
    return project;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = projectByNameController;
