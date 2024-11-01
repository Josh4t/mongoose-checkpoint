// let mongoose = require('mongoose')

// let userSchema = new mongoose.Schema({

//   firstName: String,

//   lastName: String

// })

// module.exports = mongoose.model('User', userSchema)


// Load environment variables from .env file
require('dotenv').config();

// Import Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));


