const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");





const app = express();

//cors middleware


const errorMiddleware = require("./middlewares/error");



// app.use(express.static("public"));
//cors 
app.use(cors());

app.use(express.json());
app.use(cookieParser());



//route imports
const user = require("./routes/userRoutes"); 



app.use("/api/v1", user);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
