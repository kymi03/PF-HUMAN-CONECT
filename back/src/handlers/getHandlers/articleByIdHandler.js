const articleByIdController = require("../../controllers/getControllers/articleByIdController")

const articleByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await articleByIdController(id);
    article
      ? res.status(200).json(article)
      : res.status(404).json({
          error: `No se encontró el artículo con el id:  ${id}`,
        });
  } catch (error) {
    console.error(`Error al requerir el artículo con el id: ${id}`, error);
    res
      .status(500)
      .json({ error: `Error al requerir el artículo con el id: ${id}`, error });
  }
};
module.exports = articleByIdHandler;