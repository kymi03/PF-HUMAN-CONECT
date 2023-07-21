const articleByNameController = require("../../controllers/getControllers/articleByNameController");

const articleByNameHandler = async (req, res) => {
  const { name } = req.params;
  try {
    const article = await articleByNameController(name);
    article
      ? res.status(200).json(article)
      : res.status(404).json({
          error: `No se encontró el artículo ${name}`,
        });
  } catch (error) {
    console.error(`Error al requerir el artículo ${name}`, error);
    res
      .status(500)
      .json({ error: `Error al requerir el artículo ${name}`, error });
  }
};
module.exports = articleByNameHandler;
