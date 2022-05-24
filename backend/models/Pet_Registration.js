const mongoose = require("mongoose");

const PetRegistrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required"],
  },
  petName: {
    type: String,
    required: [true, "Please enter a PetName"],
  },
  petWeight: {
    type: String,
    required: [true, "Please enter a PetWeight"],
  },
  petCategory: {
    type: String,
    required: [false, "Please enter a PetType"],
  },
  petAge: {
    type: String,
    required: [true, "Please enter a PetAge"],
  },
  petBreed: {
    type: String,
    required: [true, "Please enter a PetWeight"],
  },
  service: {
    type: String,
    required: [true, "Please enter a Service"],
  },
  slot: {
    type: String,
    required: [true, "Please enter a Slot"],
  },
});

module.exports = mongoose.model("PetRegistration", PetRegistrationSchema);
