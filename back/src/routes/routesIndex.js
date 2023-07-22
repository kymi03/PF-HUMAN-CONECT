const { Router } = require("express");
const mainRoute = Router();
const articleRoutes = require("./articlesRoutes/articlesRoutes")
const userRoutes = require("./userRoutes/userRoutes");


mainRoute.use("/articles", articleRoutes)
mainRoute.use("/user", userRoutes)

module.exports = mainRoute;
