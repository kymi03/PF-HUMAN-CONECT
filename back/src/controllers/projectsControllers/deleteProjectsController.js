const projectModel = require("../../models/project");

const deleteProjectController = async (req, res) => {
  const { id } = req.query;
  try {
    const deleteResult = await projectModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount > 0) {
      res.status(200).json({
        message: "El proyecto ha sido eliminado exitosamente",
      });
    } else {
      res.status(404).json({
        error: "No se encontró el proyecto para eliminar",
      });
    }
  } catch (error) {
    console.error("Error al eliminar el proyecto", error);
    res.status(500).json({
      error: "Error al eliminar el proyecto",
      errorDetails: error,
    });
  }
};

module.exports = deleteProjectController;
