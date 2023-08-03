const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
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
  body2: {
    type: String,
    required: true,
  },
  body3: {
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
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("Article", articleSchema);
