const { Router } = require("express");
const mainRoute = Router();
const articleRoutes = require("./articlesRoutes/articlesRoutes")


mainRoute.use("/articles", articleRoutes)

module.exports = articleRoutes;
