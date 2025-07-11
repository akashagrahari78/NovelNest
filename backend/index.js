const express = require("express");
const cors = require("cors")
const connectDb = require("./config/mongodb.js")
const userRouter = require("./routes/userRoute.js");
const postRouter = require("./routes/postRoute.js");
require("dotenv").config();



const app = express();
const PORT = process.env.PORT || 3000;


connectDb().catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5175', 
  credentials: true
}));

// Routes
app.use("/api/user", userRouter)
app.use("/api/user", postRouter)
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
