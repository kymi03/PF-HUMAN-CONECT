const express = require("express");
const docByNameHandler = require("../../handlers/getHandlers/docByNameHandler");
const getDocumentaryByName = express.Router();

getDocumentaryByName.get("/:name", docByNameHandler);

module.exports = getDocumentaryByName;
