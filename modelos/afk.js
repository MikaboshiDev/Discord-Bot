const mongoose = require("mongoose");
const afkSchema = mongoose.Schema({
    Guild: String,
    User: String,
    Razon: { type: String, default: "Sin razon" },
    Date: String,
});
module.exports = mongoose.model("afk", afkSchema);