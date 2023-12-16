const mongoose = require('mongoose');

const basicPokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
});

module.exports = mongoose.model('Pokemon', basicPokemonSchema);
