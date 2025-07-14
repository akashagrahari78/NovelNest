const express = require("express");
const cors = require("cors")
const mongoSanitize = require("express-mongo-sanitize");
const connectDb = require("./config/mongodb.js")
const userRouter = require("./routes/userRoute.js");
const postRouter = require("./routes/postRoute.js");
const allpostRouter = require("./routes/allPostRoute.js")
const searchPostRouter = require("./routes/searchPostRoute.js")
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

// app.use(mongoSanitize());


// Routes
app.use("/api/user", userRouter)  // for login , signup , contact page, newsletter email
app.use("/api/user", postRouter) // for creating a post, like a post, getting like status
app.use("/api/post", allpostRouter) // for getting all reviews at "/reviews"
app.use("/api", searchPostRouter)  // for search box query params



 
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
