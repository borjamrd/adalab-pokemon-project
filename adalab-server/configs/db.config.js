const mongoose = require('mongoose');
const connectToMongoDB = async () => {
    try {

        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB:', connection.connection.host);

    } catch (error) {
        console.error(error);
        process.exit()

    }
};

connectToMongoDB();