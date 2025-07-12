const postModel = require("../models/postModel.js");
const userModel = require("../models/userModel.js");
const mongoose = require('mongoose')

const handleUserReview = async (req, res) => {
  try {
    const { bookTitle, bookAuthor, rating, date, userReview } = req.body;
    const userId = req.user.userId; // Get userId from req.user (set by authUser middleware)

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    const user = await userModel.findById(userId);
    const newPost = await postModel.create({
      bookTitle,
      bookAuthor,
      rating,
      userReview,
      reviewedBy: userId,
      date,
    });

    user.posts.push(newPost._id);
    await user.save();

    //  console.log(newPost);
    res.status(201).json({
      success: true,
      data: newPost,
      message: "Review added successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const handleGetAllPost = async (req, res) => {
  try {
    const posts = await postModel.find({}).populate("reviewedBy", "name");

    // console.log("Posts:", JSON.stringify(posts, null, 2));

    res.json({ success: true, posts });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


const handleSearchReviews = async (req, res) => {
  try {
    const { title, author } = req.query;
    let filter = {};
    
    // Build the search filter based on provided parameters
    if (title) {
      filter.bookTitle = { $regex: title, $options: "i" };
    } 
    if (author) {
      filter.bookAuthor = { $regex: author, $options: "i" };
    }

    // If no search parameters provided, return all reviews
    if (Object.keys(filter).length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide either title or author parameter" 
      });
    }

    const reviews = await postModel
      .find(filter)
      .populate("reviewedBy", "name")
      .sort({ date: -1 })
      .lean();

    res.status(200).json({ 
      success: true, 
      reviews: reviews,
      count: reviews.length,
      searchType: title ? "title" : "author",
      searchQuery: title || author,
      message: `Reviews fetched successfully by ${title ? "title" : "author"}`
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ 
      success: false, 
      message: "Server error",
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

module.exports = { handleUserReview, handleGetAllPost, handleSearchReviews };
