const mongoose = require('mongoose')

const animalSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        species: {type: String, default: ""},
        breed: {type: String, default: ""},
        image: {type: String, default: ""},
        age: {type: String, default: ""},
        adopted: {type: String, default: ""},
        personalityTraits: {type: String, default: ""},
      }
)

module.exports = mongoose.model('Animal', animalSchema)