const articleController = require("../../controllers/getControllers/articleController");

const articleHandles = async (req, res) => {
  try {
    const articles = await articleController();
    articles.length
      ? res.status(200).json(articles)
      : res.status(404).json({
          error: "No se encontraron artículos",
        });
  } catch (error) {
    console.error("Error al requerir todos los artículos", error);
    res.status(500).json({ error: "Error al requerir todos los artículos", error });
  }
};

module.exports = articleHandles;

