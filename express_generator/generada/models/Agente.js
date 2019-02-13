"use strict";

// Cargamos mongoose
var mongoose = require('mongoose');

var agenteSchema = mongoose.modelSchema({
    name: String,
    age: Number
})