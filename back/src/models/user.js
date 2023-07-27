const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  posts: {
    post: [
      {
        postId: Number,
        body: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
});

module.exports = mongoose.model("User", userSchema);
