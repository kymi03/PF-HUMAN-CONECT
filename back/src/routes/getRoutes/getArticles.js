const express = require("express");
const articleHandles = require("../../handlers/getHandlers/articleHandler");
const getArticle = express.Router();

getArticle.get("/", articleHandles);
module.exports = getArticle;
