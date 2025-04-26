// import the mongoose
const mongoose = require("mongoose");

// load env variables from .env
require("dotenv").config();

// connectiont build to db

const connectDB = async() => {
 try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB connected successfully")

 } catch(error){
    console.log(error)
 }
}

module.exports = connectDB;