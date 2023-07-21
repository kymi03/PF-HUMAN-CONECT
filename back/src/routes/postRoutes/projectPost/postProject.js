const express = require("express");
const projectPostHandlers = require("../../../handlers/postHandlers/projectPostHandler");
const postProject = express.Router();

postProject.post("/", projectPostHandlers);

module.exports = postProject;