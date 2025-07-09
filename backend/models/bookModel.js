const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    bookName: {type: String, required: true},
    bookAuthor: {type: String, required: true},
    rating: {type: String, required: true},
    date: {type: Number , required: true},
    userReview : {type: String, required: true }
    
})