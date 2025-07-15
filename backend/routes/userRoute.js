const express = require("express")
const {userLogin, userLogout, userRegister, handleUserEmail, handleUserContact} = require("../controllers/userController.js");
const { authUser } = require("../middlewares/auth.js");
 
const userRouter = express.Router();


userRouter.post("/register", userRegister)
userRouter.post("/login", userLogin)
userRouter.post("/email",authUser,handleUserEmail)
userRouter.post("/contact",authUser, handleUserContact)
 

module.exports = userRouter