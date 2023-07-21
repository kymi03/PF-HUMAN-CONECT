const { Router } = require("express");
const getRoutes = Router();
const getArticle = require("./getArticles");
const getArticleByName = require("./getArticleByName");
const getDocumentarys = require("./getDocumentarys");
const getDocumentaryByName = require("./getDocumentaryByName");
const getProjects = require("./getProjects");
const getProjectByName = require("./getProjectByName");
const getArticleById = require("./getArticleById");
const getDocumentaryById = require("./getDocumentaryById");
const getProjectById = require("./getProjectById");

getRoutes.use("/article", getArticle);
getRoutes.use("/article", getArticleByName);
getRoutes.use("/article", getArticleById);

getRoutes.use("/documentarys", getDocumentarys);
getRoutes.use("/documentarys", getDocumentaryByName);
getRoutes.use("/documentarys", getDocumentaryById);

getRoutes.use("/projects", getProjects);
getRoutes.use("/projects", getProjectByName);
getRoutes.use("/projects", getProjectById);

module.exports = getRoutes;
