const commentModel = require("../../models/comment");

const deleteCommentController = async (req, res) => {
  const { id } = req.query;

  try {
    const deletedComment = await commentModel.deleteOne({ _id: id });
    if (deletedComment.deletedCount > 0) {
      res.status(200).json({
        message: "El comentario ha sido eliminado exitosamente",
      });
    } else {
      res.status(404).json({
        error: "Comentario no encontrado.",
      });
    }
  } catch (error) {
    console.error("Error al eliminar el comentario", error);
    res.status(500).json({
      error: "Error al eliminar el comentario",
    });
  }
};

module.exports = deleteCommentController;
