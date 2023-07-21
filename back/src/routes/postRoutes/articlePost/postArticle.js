const express = require("express");
const articlePostHandlers = require("../../../handlers/postHandlers/articlePostHandler");
const postArticle = express.Router();

postArticle.post("/", articlePostHandlers);

module.exports = postArticle;