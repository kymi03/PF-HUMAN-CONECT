const { Router } = require("express");
const getRoutes = Router();
const getArticle = require("./getArticles");
const getArticleByName = require("./getArticleByName");

getRoutes.use("/article", getArticle);
getRoutes.use("/article", getArticleByName);

module.exports = getRoutes;
