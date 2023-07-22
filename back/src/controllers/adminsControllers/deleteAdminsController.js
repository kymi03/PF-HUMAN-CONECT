const adminModel = require("../../models/admin");

const deleteAdminHandler = async (req, res) => {
  const { id } = req.query;
  try {
    const deleteResult = await adminModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount > 0) {
      res.status(200).json({
        message: "El administrador ha sido eliminado exitosamente",
      });
    } else {
      res.status(404).json({
        error: "No se encontró el administrador para eliminar",
      });
    }
  } catch (error) {
    console.error("Error al eliminar el administrador", error);
    res.status(500).json({
      error: "Error al eliminar el administrador",
      errorDetails: error,
    });
  }
};

module.exports = deleteAdminHandler;
