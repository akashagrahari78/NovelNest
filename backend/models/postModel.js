const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  bookTitle: {
    type: String,
  },
  bookAuthor: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  userReview: {
    type: String,
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ]
});

module.exports = mongoose.model("Post", postSchema);
