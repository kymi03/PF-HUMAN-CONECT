const user = require('../../models/user');



const getAllUserController = async (req, res) => {

    const {email} = req.query;
  
    try {

        if (email) {

          const userFound = await user.findOne({email})
          console.log(userFound);

         if(userFound){

          return res.status(200).json(userFound)
         }else {

          return res.status(404)
         }


        }

        const allUsers = await user.find();

        // Si no se encontraron usuarios, devolver un mensaje apropiado
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
        
module.exports = getAllUserController