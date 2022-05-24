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
const services = require("./routes/servicesRoutes");
const contact = require("./routes/contactRoutes");
const vaccine = require("./routes/vaccineRoutes");
const petRegi = require("./routes/petRegiRoutes");
const getInRoutes = require("./routes/getInRoutes");

app.use("/api/v1", user);
app.use("/api/v1/services", services);
app.use("/api/v1/contact", contact);
app.use("/api/v1/vaccines", vaccine);
app.use("/api/v1/pet", petRegi);
app.use("/api/v1/mail", getInRoutes);
//middleware for error
app.use(errorMiddleware);

module.exports = app;
