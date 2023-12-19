const config = require('./config');
const mongoose = require('mongoose');
const connectToMongoDB = async () => {
    try {

        console.log('Connecting to MongoDB...', config.MONGO_URI);
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB:', connection.connection.host);

    } catch (error) {
        console.error(error);
        process.exit()

    }
};

connectToMongoDB();