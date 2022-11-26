const mongoose = require("mongoose");

const user = mongoose.Schema({
    email: String,
    password: String,
})

module.exports = mongoose.model('User', user)