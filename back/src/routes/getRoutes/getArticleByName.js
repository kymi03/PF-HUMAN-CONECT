const express = require("express");
const articleByNameHandler = require("../../handlers/getHandlers/articleByNameHandler");
const getArticleByName = express.Router();

getArticleByName.get("/:name", articleByNameHandler);

module.exports = getArticleByName;