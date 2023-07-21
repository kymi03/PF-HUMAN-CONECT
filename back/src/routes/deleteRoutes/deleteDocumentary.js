const express = require("express");
const { Router } = require("express");
const {
  //deleteDocumentaryNameHandler,
  deleteDocumentaryIdHandler,
} = require("../../handlers/deleteHandler/deleteDocumentaryHandler");

const deleteDocumentary = Router();

//deleteDocumentary.delete("/:name", deleteDocumentaryNameHandler);
deleteDocumentary.delete("/:id", deleteDocumentaryIdHandler);

module.exports = deleteDocumentary;
