const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
    {
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    reviews: {type: Object, default: {}},

    } ,
    {
        minimize: false, 
        timeStamps: true
    },)

module.exports = mongoose.model("user", userSchema);