const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  userReview: { type: String, required: true },
  reviewedOn: { type: Date, default: Date.now },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});


module.exports = mongoose.model("Review", reviewSchema);
