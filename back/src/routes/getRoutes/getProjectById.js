const express = require("express");
const projectByIdHandler = require("../../handlers/getHandlers/projectByIdHandler")
const getProjectById = express.Router();

getProjectById.get("/id/:id", projectByIdHandler);

module.exports = getProjectById;