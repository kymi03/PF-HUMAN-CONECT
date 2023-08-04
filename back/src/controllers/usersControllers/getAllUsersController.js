const user = require('../../models/user');



const getUserController = async (req, res) => {
  
    try {
        const allUsers = await user.find();
  
        // Si no se encontraron usuarios, devolver un mensaje apropiado
        if (allUsers.length === 0) {
          return res.status(404).json({ error: 'No se encontraron usuarios' });
        } if(allUsers) {
             // Devolver la lista de usuarios encontrados
        return res.status(200).json(allUsers);
        }
        

        if (allUsers.length === 0) {
            return res.status(404).json({ error: 'No se encontraron usuarios' });
          } if(allUsers) {
               // Devolver la lista de usuarios encontrados
          return res.status(200).json(allUsers);
          }
    } catch (error) {
        res.status(500).json({error:"Error en el servidor"})
    }
 }
        
module.exports = getUserController