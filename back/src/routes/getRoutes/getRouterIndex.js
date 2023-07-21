const { Router } = require("express");
const getRoutes = Router();
const getArticle = require("./getArticles");
const getArticleByName = require("./getArticleByName");
const getDocumentarys = require("./getDocumentarys");
const getDocumentaryByName = require("./getDocumentaryByName");

getRoutes.use("/article", getArticle);
getRoutes.use("/article", getArticleByName);

getRoutes.use("/documentarys", getDocumentarys);
getRoutes.use("/documentarys", getDocumentaryByName);

module.exports = getRoutes;
