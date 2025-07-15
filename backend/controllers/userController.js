const userModel = require("../models/userModel.js");
const messageModel = require("../models/messageModel.js");
const { sendEmail } = require("../utils/sendEmail.js");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
require("dotenv").config();

//------------------------------------------login------------------
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await userModel.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        {
          userId: user._id.toString(),
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
      );
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Email or password is incorrect" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const emailNormalized = email.trim().toLowerCase();

    // Check if user exists
    const exists = await userModel.findOne({ email: emailNormalized });
    console.log(exists);
    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Validate email
    if (!validator.isEmail(emailNormalized)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email.",
      });
    }

    // Validate password
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Please enter a strong password (minimum 8 characters).",
      });
    }

    // Hash password and create user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      name,
      email: emailNormalized,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        userId: newUser._id.toString(), // Make sure this is a string
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    return res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

 

const handleUserEmail = async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address",
    });
  }

  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #f59e0b;">Welcome to Our Newsletter! 🎉</h1>
        <p>Thanks for subscribing with <strong>${email}</strong>.</p>
        <p>You'll now receive our weekly savage book reviews.</p>
        <p style="margin-top: 2rem;">
          <a href="${process.env.BASE_URL}/unsubscribe?email=${encodeURIComponent(email)}" 
             style="background: #f59e0b; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
            Unsubscribe
          </a>
        </p>
      </div>
    `;

    await sendEmail(email, "Welcome to Our Newsletter!", html);

    res.status(200).json({
      success: true,
      message: "Subscription confirmed! Check your email.",
    });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Subscription failed. Please try again later.",
    });
  }
};

const handleUserContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const userId = req.user.userId;

    if (!userId) {
      return res.status(400).json({ message: "user not found" });
    }
    const userContact = await messageModel.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      data: userContact,
      message: "Request Send Successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  userLogin,
  userRegister,
  handleUserEmail,
  handleUserContact,
};
