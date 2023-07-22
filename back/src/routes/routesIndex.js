const { Router } = require("express");
const mainRoute = Router();
const articleRoutes = require("./articlesRoutes/articlesRoutes")
const projectRoutes = require ("./projectsRoutes/projectsRoutes")
const documentariesRoutes = require("./docsRoutes/docsRoutes");
const adminsRoutes = require("./adminsRoutes/adminsRoutes");

mainRoute.use("/articles", articleRoutes);
mainRoute.use("/documentaries", documentariesRoutes);
mainRoute.use("/admins", adminsRoutes);
mainRoute.use("/projects", projectRoutes)

module.exports = mainRoute;
