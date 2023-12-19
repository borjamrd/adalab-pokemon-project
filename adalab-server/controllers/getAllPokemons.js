const basicPokemonSchema = require('../models/pokemon-model');
const config = require('../configs/config');
const getAllPokemons = async (req, res) => {
    try {
        const count = await basicPokemonSchema.countDocuments();
        const offset = req.query.offset || 0;
        const limit = req.query.limit || 20;
        const basicPokemonInfo = await basicPokemonSchema.find().limit(req.query.limit).skip(req.query.offset);

        const nextUrl = offset < count && `${config.BASE_URL}/api/pokemon?offset=${Number(offset) + Number(limit)}&limit=${limit}`
        const previousUrl = offset > 0 && `${config.BASE_URL}/api/pokemon?offset=${offset - limit}&limit=${limit}`

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



module.exports = getAllPokemons;