const { Router } = require("express");
const getArticlesHandler = require("../../controllers/articlesControllers/getArticlesController");
//const postArticlesController = require("../../controller/articlesControllers/postArticlesController");
// const putArticlesController = require("../../controller/articlesControllers/putArticlesController");
// const deleteArticlesController = require("../../controller/articlesControllers/deleteArticlesController");

const articleRoutes = Router();
//const postArticles = Router();
// const putArticles = Router();
// const deleteArticles = Router();

articleRoutes.get("/", getArticlesHandler);
//articleRoutes.post("/", postArticlesController);
// articleRoutes.put("/", putArticlesController);
// articleRoutes.delete("/", deleteArticlesController);

module.exports = articleRoutes;
