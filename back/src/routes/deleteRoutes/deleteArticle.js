const express = require("express");
const { Router } = require("express");
const {
  //deleteArticleNameHandler,
  deleteArticleIdHandler,
} = require("../../handlers/deleteHandler/deleteArticleHandler");

const deleteArticle = Router();

//deleteArticle.delete("/:name", deleteArticleNameHandler);
deleteArticle.delete("/:id", deleteArticleIdHandler);

module.exports = deleteArticle;
