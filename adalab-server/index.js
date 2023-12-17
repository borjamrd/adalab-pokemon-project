const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectToMongoDB = require('./configs/db.config');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongoDB;
app.use("/api", require("./routes"));

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});