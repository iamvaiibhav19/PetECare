const mongoose = require("mongoose");


const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    minDescription: {
        type: String,
        required: [true, "Please enter a min-description"],
    },
    description: 
        {
            "para1": {
                type: String,
            },
            "para2": {
                type: String,
            },
            "para3": {
                type: String,
            },
        },
    image: {
        url: {
            type: String,
        }
    },
    price: {
        type: Number,
        // required: false,
    },
    options: {
        type: Array,
    },
});


module.exports = mongoose.model("Service", serviceSchema);








