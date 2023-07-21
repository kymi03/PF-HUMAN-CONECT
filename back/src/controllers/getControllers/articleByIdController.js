const articleModel = require("../../models/article");
const articleByIdController = async (id) => {
  try {
    const article = await articleModel.findById(id);
    return article;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = articleByIdController;
