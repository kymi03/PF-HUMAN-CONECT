const { Router } = require("express");

const {
  deleteProjectNameHandler,
  deleteProjectHandler,
} = require("../handlers/projectHandlers");

const projectRoutes = Router();

projectRoutes.delete("/name", deleteProjectNameHandler);
projectRoutes.delete("/:id", deleteProjectHandler);

module.exports = projectRoutes;
