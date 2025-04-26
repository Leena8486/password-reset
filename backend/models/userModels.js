// import the mongoose
const mongoose = require('mongoose');

// define the user schema

const userSchmea = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true
    },

    email: {
        type: String,
        required: true, 
        unique: true
    },

    password: {
        type: String, 
        required: true
    },

    resetPasswordToken: {
        type: String
    },

    resetPasswordExpires: {
        type: Date
    }
})

// create the user model
const User = mongoose.model("User", userSchmea)


module.exports = User;