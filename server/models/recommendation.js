var mongoose = require('mongoose');

var recSchema = mongoose.Schema({
    name: String,
    gender: String,
    rain: Boolean,
    snow: Boolean,
    minTemp: Number,
    maxTemp: Number,
    outfit: String,
    text: String
});

module.exports = mongoose.model('Recommendation', recSchema);
