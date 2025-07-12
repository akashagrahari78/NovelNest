const express = require("express")
const {userLogin, userRegister, handleUserEmail} = require("../controllers/userController.js");
 
const userRouter = express.Router();


userRouter.post("/register", userRegister)
userRouter.post("/login", userLogin)
userRouter.post("/email", handleUserEmail)

module.exports = userRouter