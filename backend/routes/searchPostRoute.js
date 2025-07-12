const express = require("express")
const {handleSearchReviews} = require("../controllers/postController.js")


const searchPostRouter = express.Router();

searchPostRouter.get("/reviews", handleSearchReviews)

module.exports  = searchPostRouter