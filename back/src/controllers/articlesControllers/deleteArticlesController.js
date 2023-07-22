const articleModel = require("../../models/article");

const deleteArticleController = async (req, res) => {
  const { id } = req.query;
  try {
    const deleteResult = await articleModel.deleteOne({ _id: id });
    if (deleteResult.deletedCount > 0) {
      res.status(200).json({
        message: "El artículo ha sido eliminado exitosamente",
      });
    } else {
      res.status(404).json({
        error: "No se encontró el artículo para eliminar",
      });
    }
  } catch (error) {
    console.error("Error al eliminar el artículo", error);
    res.status(500).json({
      error: "Error al eliminar el artículo",
      errorDetails: error,
    });
  }
};

module.exports = deleteArticleController;
