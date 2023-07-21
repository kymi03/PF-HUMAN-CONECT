const express = require("express");
const docByIdHandler = require("../../handlers/getHandlers/docByIdHandler");

const getDocumentaryById = express.Router();

getDocumentaryById.get("/id/:id", docByIdHandler);

module.exports = getDocumentaryById;
