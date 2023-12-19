const express = require('express');
const cors = require('cors');
const config = require('./configs/config');

const app = express();
const connectToMongoDB = require('./configs/db.config');


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongoDB;
app.use("/api", require("./routes"));


app.listen(config.PORT, () => {
    console.log('Server is running on port ' + config.PORT);
});