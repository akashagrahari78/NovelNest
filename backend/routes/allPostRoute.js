const express = require("express")
const {handleGetAllPost} = require("../controllers/postController.js");


const allPostRouter = express.Router();

allPostRouter.get("/list",handleGetAllPost)

module.exports = allPostRouter