const { Router } = require("express");
const mainRoute = Router();
const getArticles = require("./articlesRoutes/articlesRoutes")


mainRoute.use("/articles", getArticles)

module.exports = mainRoute;
