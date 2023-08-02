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
  // },
  // causes: {
  //   type: Array,
  //   required: true,
  // },
  // amount: {
  //   type: Number,
  //   require: true,
  // },
  // paymentMethod: {
  //   type: String,
  //   required: true,
  // },
  // date: {
  //   type: Date,
  //   require: true,
  // },
});
module.exports = mongoose.model("Donation", donationSchema);
