const basicPokemonSchema = require('../models/pokemon-model');

const getAllPokemons = async (req, res) => {

    try {
        const count = await basicPokemonSchema.countDocuments();
        const offset = req.query.offset || 20;
        const limit = req.query.limit || 20;
        const basicPokemonInfo = await basicPokemonSchema.find().limit(req.query.limit)
        const nextUrl = count !== basicPokemonInfo.length && `${process.env.BASE_URL}/pokemon?offset=${offset}&limit=${limit}`

        res.status(200).json({
            count: count,
            next: nextUrl,
            previous: null,
            results: basicPokemonInfo
        });
    } catch (error) {
        res.status(500).json({ error: 'something got wrong' });
    }
}

const getPokemonByName = async (req, res) => {
    const { name } = req.params;
    try {
        const pokemon = await basicPokemonSchema.findOne({ name });
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({ error: 'something got wrong' });
    }
}


module.exports = getAllPokemons;