// Import the provisional controllers

const router = require('express').Router();
const getAllPokemons = require('../controllers/getAllPokemons')
// Define the routes
router.route('/pokemon').get(getAllPokemons);


module.exports = router;    