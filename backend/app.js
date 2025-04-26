
// import the modules
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./router/userRouter");
const cors = require("cors");

// load the enviroment variables from .env
require("dotenv").config();

// create the express app
const app = express();

// connect to the mongodb database
connectDB();

// middleware to parse the JSON
app.use(bodyParser.json())


// cors is used to fix the cross origin issues
app.use(cors());

// routes
app.use("/api/users", userRoutes);


//start the server
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("server is running at the port number 5004")
})