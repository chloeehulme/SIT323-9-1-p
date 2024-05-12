const mongoose = require('mongoose');

module.exports = mongoose.model('Calculation', new mongoose.Schema({
    type: String,
    input1: Number,
    input2: Number,
    result: Number
}));
