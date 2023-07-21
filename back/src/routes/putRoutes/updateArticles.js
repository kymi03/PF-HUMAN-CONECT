const {Router} = require ("express"); 
const putArticle = Router (); 
const articleHandler = require ("../../handlers/putHandler/putArticleHandler")


putArticle.put("/", articleHandler); 

module.exports = putArticle; 