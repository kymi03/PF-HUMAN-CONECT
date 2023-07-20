const { Router } = require("express");

const {
  deleteArticleNameHandler,
  deleteArticleHandler,
} = require("../handlers/documentarytHandlers");

const articleRoutes = Router();

articleRoutes.delete("/name", deleteArticleNameHandler);
articleRoutes.delete("/:id", deleteArticleHandler);

module.exports = articleRoutes;
