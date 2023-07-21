const express = require("express");
const documentaryPostHandlers = require("../../../handlers/postHandlers/documentaryPostHandler");
const postDocumentary = express.Router();

postDocumentary.post("/", documentaryPostHandlers);

module.exports = postDocumentary;