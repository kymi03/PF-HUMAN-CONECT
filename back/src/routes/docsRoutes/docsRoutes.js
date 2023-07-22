const { Router } = require("express");
const getDocumentaryHandler = require("../../controllers/documentariesControllers/getDocsController");
const postDocumentaryHandler = require("../../controllers/documentariesControllers/postDocsController");
const putDocumentaryHandler = require("../../controllers/documentariesControllers/putDocsController");
const deleteDocumentaryHandler = require("../../controllers/documentariesControllers/deleteDocsController");

const documentaryRoutes = Router();

documentaryRoutes.get("/", getDocumentaryHandler);
documentaryRoutes.post("/", postDocumentaryHandler);
documentaryRoutes.put("/", putDocumentaryHandler);
documentaryRoutes.delete("/", deleteDocumentaryHandler);

module.exports = documentaryRoutes;
