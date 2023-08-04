const mongoose = require("mongoose");
const { Schema } = mongoose;

const donationSchema = new Schema({
  paymentID: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amounts: {
    type: Object,
    required: true,
  },
  paymentMethod: {
    type: String,
  },
  paid: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    require: true,
  },
});
module.exports = mongoose.model("Donation", donationSchema);
