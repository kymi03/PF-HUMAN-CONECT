const express = require("express");
const articleHandles = require("../../handlers/getHandlers/articleHandler");
const getArticleByName = require("./getArticleByName");
const getArticle = express.Router();

getArticle.get("/", articleHandles);
getArticle.use(getArticleByName)
module.exports = getArticle;
