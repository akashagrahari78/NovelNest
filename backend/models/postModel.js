const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",           
  },
  bookTitle: {
    type: String,
  },
  bookAuthor: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  userReview: {
    type: String,
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);
