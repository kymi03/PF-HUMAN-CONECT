const commentModel = require("../../models/comment");

const putCommentsController = async (req, res) => {
  const { commentID } = req.query;
  const { body } = req.body;

  if (!commentID) {
    return res.status(400).json({
      message: "Se requiere el ID de referencia del comentario",
    });
  }

  try {
    const putComment = await commentModel.updateOne(
      { _id: commentID },
      { $set: { body } }
    );

    if (!putComment) {
      return res.status(404).json({ message: "Comentario no encontrado." });
    }

    res.status(200).json(putComment);
  } catch (error) {
    console.log(
      `Error al intentar actualizar el comentario. Error: ${error.message}`
    );
    res.status(500).json({ error: error.message });
  }
};

module.exports = putCommentsController;
