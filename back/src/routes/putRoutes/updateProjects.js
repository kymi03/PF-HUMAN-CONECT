const {Router} = require ("express"); 
const putProjects= Router (); 
const projectHandler = require ("../../handlers/putHandler/putProjectHandler")


putProjects.put("/", projectHandler); 

module.exports = putProjects; 