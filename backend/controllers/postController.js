const postModel = require("../models/postModel.js")
const userModel = require("../models/userModel.js")


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
      reviewedBy: userId, // the userId from the token
      date,
    });

    user.posts.push(newPost._id);
    await user.save();

    //  console.log(newPost);  
    res.status(201).json({ 
      success: true, 
      data: newPost, 
      message: "Review added successfully." 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {handleUserReview}