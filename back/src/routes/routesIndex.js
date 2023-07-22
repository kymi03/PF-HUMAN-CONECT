const { Router } = require("express");
const mainRoute = Router();
const articleRoutes = require("./articlesRoutes/articlesRoutes");
const documentariesRoutes = require("./docsRoutes/docsRoutes");
const adminsRoutes = require("./adminsRoutes/adminsRoutes");

mainRoute.use("/articles", articleRoutes);
mainRoute.use("/documentaries", documentariesRoutes);
mainRoute.use("/admins", adminsRoutes);

module.exports = mainRoute;
