const docModel = require("../../models/documentary");
const docByNameController = async (name) => {
  // Crear una expresión regular insensible a mayúsculas y minúsculas con el nombre.
  const regex = new RegExp(name, "i");
  try {
    const doc = await docModel.find({ name: { $regex: regex } });
    return doc;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = docByNameController;
