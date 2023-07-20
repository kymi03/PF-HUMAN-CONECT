const { Router } = require("express");

const {
  deleteDocumentaryNameHandler,
  deleteDocumentaryHandler,
} = require("../handlers/documentarytHandlers");

const documentaryRoutes = Router();

documentaryRoutes.delete("/name", deleteDocumentaryNameHandler);
documentaryRoutes.delete("/:id", deleteDocumentaryHandler);

module.exports = documentaryRoutes;
