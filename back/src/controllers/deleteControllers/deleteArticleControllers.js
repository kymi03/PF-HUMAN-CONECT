const Article = require("../../models/article");

const deleteArticleIdController = async (articleId) => {
  try {
    const deleteArticle = await Article.findByIdAndRemove(articleId);
    return deleteArticle;
  } catch (error) {
    throw new Error("Error al eliminar el artículo por ID");
  }
};

//const deleteArticleNameController = async (articleName) => {
//  try {
//    const deleteArticle = await Article.findOneAndRemove({ articleName });
//    return deleteArticle;
//  } catch (error) {
//    throw new Error("Error al eliminar el artículo por nombre");
//  }
//};

module.exports = {
  deleteArticleIdController,
  // deleteArticleNameController,
};
