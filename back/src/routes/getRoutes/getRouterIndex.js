const { Router } = require("express");
const getRoutes = Router();
const getArticle = require("./getArticles");
const getArticleByName = require("./getArticleByName");
const getDocumentarys = require("./getDocumentarys");
const getDocumentaryByName = require("./getDocumentaryByName");
const getProjects = require("./getProjects");
const getProjectByName = require("./getProjectByName");

getRoutes.use("/article", getArticle);
getRoutes.use("/article", getArticleByName);

getRoutes.use("/documentarys", getDocumentarys);
getRoutes.use("/documentarys", getDocumentaryByName);

getRoutes.use("/projects", getProjects)
getRoutes.use("/projects", getProjectByName)

module.exports = getRoutes;
