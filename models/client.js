const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  second_name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  company_name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  email_address: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  message: {
    type: String,
    trim: true,
    required: true,
    maxlength: 200,
  },
},{timestamps:true});

module.exports = mongoose.model("Client",clientSchema);
