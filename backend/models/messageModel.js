const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    message: {type: String},
    createdAt: {type: String, default: Date.now()}
})

module.exports = mongoose.model("Message", messageSchema)