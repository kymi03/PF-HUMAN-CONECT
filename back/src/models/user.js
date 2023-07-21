const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userLastName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userPhone: {
    type: Number,
    required: true,
  },
  userPosts: {
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
