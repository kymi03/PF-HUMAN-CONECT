const Project = require ("../../models/project")


const putProjectHandler = async (req, res) => {

    const {id} = req.params

    const {name, author, mediaImages, mediaVideos, body, date, location, breaf} = req.body; 

    try {

        const project = await Project.findById(id)

        if (!project) {
            return res.status(400).json({error:"project no existe"})
        }

        project.name = name;
        project.author = author;
        project.media.imgs = mediaImages;
        project.media.videos = mediaVideos;
        project.body = body;
        project.date = date;
        project.location = location;
        project.breaf = breaf;

        const updateProject = await project.save()



        res.status(200).json(updateProject)
        
    } catch (error) {
        res.status(400).json({error: "Error al actualizar el proyecto"})
    }



}


module.exports = putProjectHandler; 