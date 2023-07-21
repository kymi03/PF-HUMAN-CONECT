const { Router } = require("express");
const mainRoute = Router();
const getRoutes = require("./getRoutes/getRouterIndex");
const postRoutes = require("../routes/postRoutes/postRouterIndex")

mainRoute.use("/get", getRoutes);

mainRoute.use('/post', postRoutes);

module.exports = mainRoute