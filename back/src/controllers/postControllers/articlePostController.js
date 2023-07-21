const article = require('../../models/article')


const articlePostController = (body) => {

    try{
        const newPostArticle = new article(body);

        newPostArticle.save()

        return newPostArticle;
    }catch(error){
        throw new error(error)
    }

};
module.exports = articlePostController;