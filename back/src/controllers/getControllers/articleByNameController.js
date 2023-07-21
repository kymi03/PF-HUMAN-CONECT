const articleModel = require("../../models/article");
const articleByNameController = async (name) => {
  // Crear una expresión regular insensible a mayúsculas y minúsculas con el nombre.
  const regex = new RegExp(name, "i");
  try {
    const article = await articleModel.find({ name: { $regex: regex } });
    return article;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = articleByNameController;
