var mongoose = require('mongoose');

var recSchema = mongoose.Schema({
    name: String,
    description: String,
    gender: String,
    minTemp: Number,
    maxTemp: Number,
    url: String,
    text: String
});

mongoose.model('Recommendation', recSchema);
