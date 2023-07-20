const articleController = require("../../controllers/getControllers/articleController");

const articleHandles = (req, res) => {
  articleController(req, res);
};
module.exports = articleHandles;
