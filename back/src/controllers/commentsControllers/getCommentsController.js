const commentModel = require("../../models/comment");

const getCommentsController = async (req, res) => {
  const { userID, postReference } = req.query;
  let query = {};

  userID && (query.author = userID);
  postReference && (query.postReference = postReference);

  try {
    const comments = await commentModel.find(query);
    res.status(200).json(comments);
  } catch (error) {
    console.log(`Error al requerir los comentarios. Error: ${error}`);
    res.status(500).json(`Error al requerir los comentarios. Error: ${error}`);
  }
};

module.exports = getCommentsController;
