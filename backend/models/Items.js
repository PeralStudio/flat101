const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: String,
    descripcion: String,
    image: String,
    price: Number,
    category: String
});


module.exports = mongoose.model('item', itemsSchema);