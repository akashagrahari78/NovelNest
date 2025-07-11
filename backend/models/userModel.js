const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

    reviews: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Review" }
    ],
    posts: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Post" }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
