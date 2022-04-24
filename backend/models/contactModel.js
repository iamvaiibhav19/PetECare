const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
    },
    message: {
        type: String,
        required: [true, "Please enter your message"],
    },
});


module.exports = mongoose.model("Contact", contactSchema);