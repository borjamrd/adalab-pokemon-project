const dotenv = require('dotenv');
const path = require('path');



dotenv.config({
    path: path.join(__dirname, '..', `${process.env.NODE_ENV}.env`)
});


module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    BASE_URL: process.env.BASE_URL || 'http://localhost:4500',
    PORT: process.env.PORT || 4500,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/pokemon'
}