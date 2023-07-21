const express = require("express");
const getProjectByName = express.Router();
const projectByNameHandler = require("../../handlers/getHandlers/projectByNameHandler");

getProjectByName.get("/:name", projectByNameHandler);

module.exports = getProjectByName;
