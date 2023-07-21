const Article = require ("../../../models/article")


const putArticleHandler = async (req, res) => {

    const {id} = req.params

    const {name, author, mediaImages, mediaVideos, body, date, location, breaf} = req.body; 

    try {

        const article = await Article.findById(id)

        if (!article) {
            return res.status(400).json({error:"articulo no existe"})
        }

        article.name = name;
        article.author = author;
        article.media.imgs = mediaImages;
        article.media.videos = mediaVideos;
        article.body = body;
        article.date = date;
        article.location = location;
        article.breaf = breaf;

        const updateArticle = await article.save()



        res.status(200).json(updateArticle)
        
    } catch (error) {
        res.status(400).json({error: "Error al actualizar el articulo"})
    }



}


module.exports = putArticleHandler; 