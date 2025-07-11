const express = require("express")
const {handleGetAllPost} = require("../controllers/postController.js");
const { authUser } = require("../middlewares/auth");


const allPostRouter = express.Router();

allPostRouter.get("/list", authUser ,handleGetAllPost)

module.exports = allPostRouter