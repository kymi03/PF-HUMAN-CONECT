const { Router } = require("express");
const getDocumentaryHandler = require("../../controllers/documentariesControllers/getDocsController");
const postDocumentaryHandler = require("../../controllers/documentariesControllers/postDocsController");
const putDocumentaryHandler = require("../../controllers/documentariesControllers/putDocsController");
const deleteDocumentaryHandler = require("../../controllers/documentariesControllers/deleteDocsController");

const documentariesRoutes = Router();

documentariesRoutes.get("/", getDocumentaryHandler);
documentariesRoutes.post("/", postDocumentaryHandler);
documentariesRoutes.put("/", putDocumentaryHandler);
documentariesRoutes.delete("/", deleteDocumentaryHandler);

module.exports = documentariesRoutes;
