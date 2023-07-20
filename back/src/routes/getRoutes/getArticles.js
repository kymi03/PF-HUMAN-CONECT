const express = require("express");
const articleHandles = require("../../handlers/getHandlers/articleHandler");
const getArticle = express.Router();

getArticle.get("/article", articleHandles);
module.exports = getArticle;
