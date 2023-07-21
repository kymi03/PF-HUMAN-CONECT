const { Router } = require('express');
const postRoutes = Router();

const postAdmin = require('./adminPost/postAdmin');


postRoutes.use('/admin', postAdmin);


module.exports = postRoutes;
