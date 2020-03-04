const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema ({
    name: String,
    location: String,
    vacancies: { type: Boolean, default: true},
    tags: {type: Array},

},
{
    timestamps: true,
},
{
    rooms     : [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ]
}

);

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;


