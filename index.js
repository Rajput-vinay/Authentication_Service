const express = require("express")
const app = express();

// load config from .env file
require("dotenv").config()
// port start
const PORT = process.env.PORT||4000

// middleware to parse json request API
const cookieParser = require("cookie-parser")
app.use(cookieParser());
app.use(express.json());

// import the routes 
const user = require("./routes/user");

// mount the routes
app.use("/api/v1",user);

// connect the DB
const dbconnect = require("./config/database");
dbconnect();

// start the server 
app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`);
})