const Documentary = require ("../../../models/documentary")


const putDocumentaryHandler = async (req, res) => {

    const {id} = req.params

    const {name, author, mediaImages, mediaVideos, body, date, location, breaf} = req.body; 

    try {

        const documentary = await Documentary.findById(id)

        if (!documentary) {
            return res.status(400).json({error:"documental no existe"})
        }

        documentary.name = name;
        documentary.author = author;
        documentary.media.imgs = mediaImages;
        documentary.media.videos = mediaVideos;
        documentary.body = body;
        documentary.date = date;
        documentary.location = location;
        documentary.breaf = breaf;

        const updateDocumentary = await documentary.save()



        res.status(200).json(updateDocumentary)
        
    } catch (error) {
        res.status(400).json({error: "Error al actualizar el documental"})
    }



}


module.exports =  putDocumentaryHandler ; 