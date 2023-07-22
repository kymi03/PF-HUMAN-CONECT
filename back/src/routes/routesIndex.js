const { Router } = require("express");
const mainRoute = Router();
const getArticles = require("./articlesRoutes/articlesRoutes");
const getDocumentaries = require("./docsRoutes/docsRoutes");
const getAdmins = require("./adminsRoutes/adminsRoutes");

mainRoute.use("/articles", getArticles);
mainRoute.use("/documentaries", getDocumentaries);
mainRoute.use("/admins", getAdmins);

module.exports = mainRoute;
