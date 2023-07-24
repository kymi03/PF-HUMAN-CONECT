const { Router } = require("express");
const getArticlesController = require("../../controllers/articlesControllers/getArticlesController");
const postArticlesController = require("../../controllers/articlesControllers/postArticlesController");
const putArticlesController = require("../../controllers/articlesControllers/putArticlesController");
const deleteArticleController = require("../../controllers/articlesControllers/deleteArticlesController");

const articleRoutes = Router();

articleRoutes.get("/", getArticlesController);
articleRoutes.post("/", postArticlesController);
articleRoutes.put("/", putArticlesController);
articleRoutes.delete("/", deleteArticleController);

module.exports = articleRoutes;
