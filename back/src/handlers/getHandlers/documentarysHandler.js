const documentarysController = require("../../controllers/getControllers/documentarysController");
const documentarysHandler = async (req, res) => {
  try {
    const documentarys = await documentarysController();
    documentarys.length
      ? res.status(200).json(documentarys)
      : res.status(404).json({
          error: "No se encontraron documentales",
        });
  } catch (error) {
    console.error("Error al requerir todos los documentales", error);
    res
      .status(500)
      .json({ error: "Error al requerir todos los documentales", error });
  }
};

module.exports = documentarysHandler;
