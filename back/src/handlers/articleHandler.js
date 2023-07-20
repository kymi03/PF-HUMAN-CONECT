const articleController = require("../controllers/articleController");

const articleHandles = (req, res) => {
  articleController(req, res);
};
module.exports = articleHandles;
