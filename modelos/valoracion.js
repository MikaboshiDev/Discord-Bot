const mongoose = require('mongoose');

const valoraciones = new mongoose.Schema({
    messageID: String,
    autor: {type: String, default: ""}
})

const model = mongoose.model("valoraciones", valoraciones);

module.exports = model;