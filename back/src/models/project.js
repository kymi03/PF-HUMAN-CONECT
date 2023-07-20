const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  projectId: {
    type: Number,
    required: true,
    unique: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  projectAuthor: {
    type: String,
    default: "Anonimo",
  },
  projectMedia: {
    images: [
      {
        imageName: String,
        imageUrl: String,
      },
    ],
    videos: [
      {
        videoName: String,
        videoUrl: String,
      },
    ],
  },
  projectBody: {
    type: Text,
    required: true,
  },
  projectBreaf: {
    type: Text,
    required: true,
  },
  projectDate: {
    type: Date,
    required: true,
  },
  projectLocation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
