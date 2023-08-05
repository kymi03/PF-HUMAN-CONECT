const user = require("../../models/user");

const getUserCommentController = async (req, res) => {
  const { userId } = req.query;
  try {
    const userRecord = await user.findById(userId).populate("posts");
    if (!userRecord) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    return res.status(200).json(userRecord.posts);
  } catch (error) {
    console.error("Error al obtener los comentarios", error);
    return res
      .status(500)
      .json({ error: "Error al obtener los comentarios", error });
  }
};

module.exports = getUserCommentController;
