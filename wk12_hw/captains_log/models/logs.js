const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema ({
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true},
},
{
    timestamps: true,
},

);