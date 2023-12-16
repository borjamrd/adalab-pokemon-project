const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectToMongoDB = require('./configs/db.config');



app.use(express.json());
connectToMongoDB;
app.use("/api", require("./routes"));

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});