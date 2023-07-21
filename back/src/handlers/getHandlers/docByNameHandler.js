const docByNameController = require("../../controllers/getControllers/docByNameController");

const docByNameHandler = async (req, res) => {
  const { name } = req.params;
  try {
    const doc = await docByNameController(name);
    doc
      ? res.status(200).json(doc)
      : res.status(404).json({
          error: `No se encontró el documental ${name}`,
        });
  } catch (error) {
    console.error(`Error al requerir el documental ${name}`, error);
    res
      .status(500)
      .json({ error: `Error al requerir el documental ${name}`, error });
  }
};
module.exports = docByNameHandler;