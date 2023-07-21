const express = require("express");
const projectsHandler = require("../../handlers/getHandlers/projectsHandler");
const getProjects = express.Router();

getProjects.get("/",projectsHandler)

module.exports = getProjects;