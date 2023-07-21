const project = require('../../models/project');


const projectPostController = (body) => {

    try{
        const newPostProject = new project(body);

        newPostProject.save()

        return newPostProject;
    }catch(error){
        throw new error(error)
    }

};
module.exports = projectPostController;