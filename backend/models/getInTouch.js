const mongoose = require("mongoose");

const getInTouchSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("getInTouch", getInTouchSchema);
