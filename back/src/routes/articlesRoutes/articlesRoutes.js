const { Router } = require("express");
const getArticlesHandler = require("../../controllers/articlesControllers/getArticlesController");
//const postArticlesController = require("../../handlers/articlesControllers/postArticlesHandler");
// const putArticlesController = require("../../handlers/articlesControllers/putArticlesController");
// const deleteArticlesController = require("../../handlers/articlesControllers/deleteArticlesController");

const articleRoutes = Router();
//const postArticles = Router();
// const putArticles = Router();
// const deleteArticles = Router();

articleRoutes.get("/", getArticlesHandler);
//postArticles.use("/", postArticlesController);
// putArticles.use("/", putArticlesController);
// deleteArticles.use("/", deleteArticlesController);

module.exports = articleRoutes;
