const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  adminId: {
    type: Number,
    required: true,
    unique: true,
  },
  adminName: {
    type: String,
    required: true,
  },
  adminLastName: {
    type: String,
    required: true,
  },
  adminEmail: {
    type: String,
    required: true,
  },
  adminPhone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
