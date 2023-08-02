const mongoose = require("mongoose");
const { Schema } = mongoose;

const donationSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  causes: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    require: true,
  },
});
module.exports = mongoose.model("Donation", donationSchema);
