const { Router } = require("express");
const mainRoute = Router();
const articleRoutes = require("./articlesRoutes/articlesRoutes")
const projectRoutes = require ("./projectsRoutes/projectsRoutes")


mainRoute.use("/articles", articleRoutes)

mainRoute.use("/projects", projectRoutes)

module.exports = mainRoute;
