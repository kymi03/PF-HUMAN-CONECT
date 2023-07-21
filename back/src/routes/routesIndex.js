const { Router } = require("express");
const mainRoute = Router();
const getRoutes = require("./getRoutes/getRouterIndex");

mainRoute.use("/get", getRoutes);
module.exports = mainRoute