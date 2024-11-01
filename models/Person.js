const mongoose = require('mongoose');

// Define Person Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Create the Model
const Person = mongoose.model('Person', personSchema);


// Create a person instance
const createAndSavePerson = () => {
    const gods = new Person({
      name: 'Gods Toddler',
      age: 30,
      favoriteFoods: ['Pizza', 'Burgers']
    });
  
    // Save to database
    john.save((err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Person saved successfully:", data);
      }
    });
  };
  
  createAndSavePerson();
  