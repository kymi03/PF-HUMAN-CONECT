const { Router } = require("express");
const mainRoute = Router();
const getRoutes = require("./getRoutes/getRouterIndex");
const postRoutes = require("../routes/postRoutes/postRouterIndex");
const deleteRoutes = require("./deleteRoutes/deleteRouterIndex");
const putRoutes = require ("./putRoutes/putIndexRoutes")

mainRoute.use("/get", getRoutes);

mainRoute.use("/post", postRoutes);

mainRoute.use("/delete", deleteRoutes);

mainRoute.use("/put", putRoutes); 

module.exports = mainRoute;
