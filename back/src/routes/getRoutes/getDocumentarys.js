const express = require("express");
const getDocumentarys = express.Router();
const documentarysHandler = require("../../handlers/getHandlers/documentarysHandler");

getDocumentarys.get("/", documentarysHandler);

module.exports = getDocumentarys;
