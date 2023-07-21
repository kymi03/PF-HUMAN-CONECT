const {Router} = require ("express");
const putRoutes = Router(); 

const updateArticle = require ("./updateArticles");
const updateDocumentary = require ("./updateDocumentaries"); 
const updateProject = require ("./updateProjects"); 


putRoutes.use("/article", updateArticle); 

putRoutes.use("/documentarys", updateDocumentary); 

putRoutes.use("/projects", updateProject ); 


module.exports = putRoutes; 
