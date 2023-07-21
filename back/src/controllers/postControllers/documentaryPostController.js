const documentary = require('../../models/documentary')


const documentaryPostController = (body) => {

    try{
        const newPostDocumentary = new documentary(body);

        newPostDocumentary.save()

        return newPostDocumentary;
    }catch(error){
        throw new error(error)
    }

};
module.exports = documentaryPostController;