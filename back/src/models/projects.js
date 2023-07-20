const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectsSchema = new Schema({
    projectsId: {
        type: Number,
        required: true,
        unique: true
    },
    projectsName: {
        type: String,
        required: true,
    },
    projectsAuthor:{
        type: String,
        default: "Anonimo",
    },
    projectsMedia: {
        images: [
            {
                imageName: String,
                imageUrl: String,
            }
        ],
        videos: [
            {
                videoName: String,
                videoUrl: String,
            }
        ]
    },
    projectsBody:{
        type: Text,
        required: true,
    }
});

module.exports = mongoose.model('Projects', projectsSchema);