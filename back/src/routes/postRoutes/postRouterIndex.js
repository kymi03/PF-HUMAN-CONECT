const { Router } = require('express');
const postRoutes = Router();

const postAdmin = require('./adminPost/postAdmin');
const postArticle = require('./articlePost/postArticle');
const postDocumentary = require('./documentaryPost/postDocumentary');
const postProject = require('./projectPost/postProject');
const postUser = require('./userPost/postUsers');


postRoutes.use('/admin', postAdmin);
postRoutes.use('/article', postArticle);
postRoutes.use('/documentary', postDocumentary);
postRoutes.use('/project', postProject);
postRoutes.use('/user', postUser);


module.exports = postRoutes;
