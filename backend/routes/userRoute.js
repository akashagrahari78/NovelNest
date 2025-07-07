const express = require("express")

const userRouter = express.Router();

userRouter.post("/register", (req, res) =>{
    console.log("you are in register route")
})
module.exports = userRouter