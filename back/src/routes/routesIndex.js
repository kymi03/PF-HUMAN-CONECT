const { Router } = require("express");
const mainRoute = Router();
// const getArticles = require("./articlesRoutes/articlesRoutes")
const userRoutes = require("./userRoutes/userRoutes")


// mainRoute.use("/articles", getArticles)
mainRoute.use("/user", userRoutes)

module.exports = mainRoute;
