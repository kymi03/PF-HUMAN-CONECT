const mongoose = require("mongoose");
const { Schema } = mongoose;

const documentarySchema = new Schema({
  documetaryId: {
    type: Number,
    required: true,
    unique: true,
  },
  documetaryName: {
    type: String,
    required: true,
  },
  documetaryImage: {
    type: String,
  },
  documetaryVideo: {
    type: String,
  },
  documetaryBody: {
    type: String,
  },
  documetaryAuthor: {
    type: String,
  },
  documetaryBreaf: {
    type: Text,
    required: true,
  },
  documetaryDate: {
    type: Date,
    required: true,
  },
  documetaryLocation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Documentary", documentarySchema);
