const { Router } = require("express");
const getProjectsController = require ("./../../controllers/projectsControllers/getProjectsController")
const postProjectController = require ("./../../controllers/projectsControllers/postProjectsController")
const putProjectController = require ("./../../controllers/projectsControllers/putProjectsControllers")
const deleteProjectController = require ("./../../controllers/projectsControllers/deleteProjectsController.js")

const projectRoutes = Router();


projectRoutes.get("/", getProjectsController);
projectRoutes.post("/", postProjectController);
projectRoutes.put("/", putProjectController);
projectRoutes.delete("/", deleteProjectController);

module.exports = projectRoutes;