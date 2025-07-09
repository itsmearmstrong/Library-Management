const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  available: Boolean
});

module.exports = mongoose.model('Book', bookSchema);
