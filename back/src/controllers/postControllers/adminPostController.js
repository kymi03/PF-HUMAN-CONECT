const admin = require('../../models/admin')


const adminPostController = (body) => {

    try{
        const newPostAdmin = new admin(body);

        newPostAdmin.save()

        return newPostAdmin;
    }catch(error){
        throw new error(error)
    }

};
module.exports = adminPostController;
