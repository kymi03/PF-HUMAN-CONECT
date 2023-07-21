const {Router} = require ("express"); 
const putDocumentary = Router (); 
const documentaryHandler = require ("../../handlers/putHandler/putDocumentarieHandler")


putDocumentary.put("/", documentaryHandler); 

module.exports = putDocumentary; 