const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  articleId: {
    type: Number,
    required: true,
    unique: true,
  },
  articleName: {
    type: String,
    required: true,
  },
  articleAuthor: {
    type: String,
    default: "Anonimo",
  },
  articleMedia: {
    imgs: [
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
  articleBody: {
    type: String,
    required: true,
  },
  articleBreaf: {
    type: String,
    required: true,
  },
  articleDate: {
    type: Date,
    required: true,
  },
  articleLocation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Article", articleSchema);
