const express = require("express");
const { Router } = require("express");
const {
  //deleteProjectNameHandler,
  deleteProjecIdHandler,
} = require("../../handlers/deleteHandler/deleteProjectHandler");

const deleteProject = Router();

//deleteProject.delete("/:name", deleteProjectNameHandler);
deleteProject.delete("/:id", deleteProjecIdHandler);

module.exports = deleteProject;
