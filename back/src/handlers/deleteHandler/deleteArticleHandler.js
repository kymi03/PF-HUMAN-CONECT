const {
  deleteArticleIdController,
  deleteArticleNameController,
} = require("../../controllers/deleteControllers/deleteArticleControllers");

const deleteArticleIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteArticle = await deleteArticleIdController(id);
    res.status(200).json(deleteArticle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteArticleNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const deleteArticle = await deleteArticleNameController(name);
    return res.status(200).json(deleteArticle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  deleteArticleNameHandler,
  deleteArticleIdHandler,
};
