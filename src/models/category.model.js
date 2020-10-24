const monsgoose = require('mongoose');

const dataSchema = new monsgoose.Schema({
  nome: String,
  data: Date,
});

const category = monsgoose.modal('Category', dataSchema);
module.exports = category;