const commentModel = require("../../models/comment");

const deleteCommentController = async (req, res) => {
  const { reference } = req.query;

  if (!reference) {
    return res
      .status(400)
      .json({ message: "Se requiere el ID del comentario." });
  }

  try {
    const deletedComment = await commentModel.findByIdAndRemove(reference);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comentario no encontrado." });
    }

    res.status(200).json(deletedComment);
  } catch (error) {
    console.log(`Error al intentar eliminar el comentario. Error: ${error}`);
    res.status(500).json({ error });
  }
};

module.exports = deleteCommentController;
