const docByIdController = require("../../controllers/getControllers/docByIdController");

const articleByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await docByIdController(id);
    doc
      ? res.status(200).json(doc)
      : res.status(404).json({
          error: `No se encontró el documental con id: ${id}`,
        });
  } catch (error) {
    console.error(`Error al requerir el documental con id: ${id}`, error);
    res
      .status(500)
      .json({ error: `Error al requerir el documental con id: ${id}`, error });
  }
};
module.exports = articleByIdHandler;