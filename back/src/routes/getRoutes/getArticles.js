const express = require("express");
const articleHandles = require("../../handlers/articleHandler");
const getArticle = express.Router();

getArticle.get("/article", articleHandles);
module.exports = getArticle;
