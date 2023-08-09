const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  author: {
    type: String,
    ref: "User",
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comments", commentSchema);
