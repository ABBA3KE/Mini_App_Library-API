const mongoose = require ('mongoose');
const bookSchema = mongoose.Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    available: {type:Boolean, default: true},
})
module.exports = mongoose.model('book', bookSchema)