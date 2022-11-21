const mongoose = require('mongoose');

const reporte = new mongoose.Schema({
    messageID: String,
    autor: {type: String, default: ""}
})

const model = mongoose.model("reportes", reporte);

module.exports = model;