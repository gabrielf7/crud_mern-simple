const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String
}, { timestamps: true });

const users = mongoose.model('Users', dataSchema);
module.exports = users;