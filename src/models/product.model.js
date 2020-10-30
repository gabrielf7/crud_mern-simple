const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  categoria: String,
  preco: Number,
  quantidade: Number
}, { timestamps: true });

const product = mongoose.model('Product', dataSchema);
module.exports = product;