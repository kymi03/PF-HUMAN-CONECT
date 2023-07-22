const articleModel = require("../../models/article");

const getArticlesHandler = async (req, res) => {
  const { name, articleId } = req.query;
  try {
    const query = {};
    if (name)
      query.name = {
        $regex: new RegExp(name, "i"),
      };
    if (articleId) 
    query.articleId = {
      $regex: new RegExp(articleId, "i"),
    }
    const articles = await articleModel.find(query);
    articles.length
      ? res.status(200).json(articles)
      : res.status(404).json({
          error: "No se encontraron artículos",
        });
  } catch (error) {
    console.error("Error al requerir todos los artículos", error);
    res
      .status(500)
      .json({ error: "Error al requerir todos los artículos", error });
  }
};

module.exports = getArticlesHandler;
