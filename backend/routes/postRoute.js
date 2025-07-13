const express = require("express")
const {handleUserReview, handlePostLike} = require("../controllers/postController.js")
const {authUser} = require("../middlewares/auth.js")

const postRouter = express.Router();  // for the input review by the user

postRouter.post("/add-review",authUser, handleUserReview )
postRouter.put("/:postId/like", authUser, handlePostLike)
module.exports = postRouter