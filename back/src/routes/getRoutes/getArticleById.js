const express = require("express");
const articleByIdHandler = require("../../handlers/getHandlers/articleByIdHandler")
const getArticleById = express.Router();

getArticleById.get("/id/:id", articleByIdHandler);

module.exports = getArticleById;