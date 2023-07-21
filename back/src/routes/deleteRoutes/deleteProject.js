const express = requiere("express");
const { Router } = require("express");
const {
  deleteProjectNameHandler,
  deleteProjecIdHandler,
} = require("../../handlers/deleteHandler/deleteProjectHandler");

const deleteProject = Router();

deleteProject.delete("/name", deleteProjectNameHandler);
deleteProject.delete("/:id", deleteProjecIdHandler);

module.exports = deleteProject;
