const mongoose = require("mongoose");
const { Schema } = mongoose;

const documentarySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "Anonimo",
  },
  media: {
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
  body: {
    type: String,
    required: true,
  },
  breaf: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Documentary", documentarySchema);
