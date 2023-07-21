const user = require('../../models/user')


const userPostController = (body) => {

    try{
        const newPostUser = new user(body);

        newPostUser.save()

        return newPostUser;
    }catch(error){
        throw new error(error)
    }

};
module.exports = userPostController;