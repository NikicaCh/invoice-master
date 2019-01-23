'use-strict';

const mongoose = require("mongoose")

let ArtSchema = new mongoose.Schema({
    name: String,
    price: Number, // as I found on internet, you can store floats in Number data type
})

let Art = mongoose.model("Art", ArtSchema);

module.exports = Art;