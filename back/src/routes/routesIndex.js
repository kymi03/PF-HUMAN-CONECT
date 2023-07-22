const { Router } = require("express");
const mainRoute = Router();
const articleRoutes = require("./articlesRoutes/articlesRoutes")
const projectRoutes = require ("./projectsRoutes/projectsRoutes")
const documentariesRoutes = require("./docsRoutes/docsRoutes");
const adminsRoutes = require("./adminsRoutes/adminsRoutes");
const userRoutes = require('./userRoutes/userRoutes');


mainRoute.use("/articles", articleRoutes);
mainRoute.use("/documentaries", documentariesRoutes);
mainRoute.use("/admins", adminsRoutes);
mainRoute.use("/projects", projectRoutes)
mainRoute.use("/user", userRoutes);

module.exports = mainRoute;
