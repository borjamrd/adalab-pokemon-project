const basicPokemonSchema = require('../models/pokemon-model');

const getAllPokemons = async (req, res) => {

    try {
        const count = await basicPokemonSchema.countDocuments();
        const offset = req.query.offset || 0;
        const limit = req.query.limit || 20;
        const basicPokemonInfo = await basicPokemonSchema.find().limit(req.query.limit).skip(req.query.offset);

        const nextUrl = offset < count && `${process.env.BASE_URL}/pokemon?offset=${Number(offset) + Number(limit)}&limit=${limit}`
        const previousUrl = offset > 0 && `${process.env.BASE_URL}/pokemon?offset=${offset - limit}&limit=${limit}`

        res.status(200).json({
            count: count,
            next: nextUrl,
            previous: previousUrl,
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