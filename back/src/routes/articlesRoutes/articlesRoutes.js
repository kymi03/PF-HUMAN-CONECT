const { Router } = require("express");
const getArticlesHandler = require("../../controllers/articlesControllers/getArticlesController");
//const postArticlesHandler = require("../../handlers/articlesHandlers/postArticlesHandler");
// const putArticlesHandler = require("../../handlers/articlesHandlers/putArticlesHandler");
// const deleteArticlesHandler = require("../../handlers/articlesHandlers/deleteArticlesHandler");

const articleRoutes = Router();
//const postArticles = Router();
// const putArticles = Router();
// const deleteArticles = Router();

articleRoutes.get("/", getArticlesHandler);
//postArticles.use("/", postArticlesHandler);
// putArticles.use("/", putArticlesHandler);
// deleteArticles.use("/", deleteArticlesHandler);

module.exports = articleRoutes;
