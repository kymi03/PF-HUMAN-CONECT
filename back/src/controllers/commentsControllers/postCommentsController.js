const commentModel = require("../../models/comment");

const postCommentsController = async (req, res) => {
  const { body } = req.body;
  const { userID, reference } = req.query;
  if (!userID || !reference)
    return res
      .status(400)
      .json({ message: "Se requiere ID  del usuario y referencia al post" });

  try {
    const newComment = new commentModel({
      author: userID,
      reference: reference,
      body,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.log(`error al intentar guardar el comentario. Error: ${error}`);
    res.status(500).json({ error });
  }
};

module.exports = postCommentsController;
