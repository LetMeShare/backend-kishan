const express = require('express');

const app = express();
const connectDB = require('./config/db');
connectDB();

const port = process.env | 200;


// routes

app.use('/api/files', require('./routes/files'));
app.listen(port, (req, res) => {
    console.log(`Server is listening on port -> ${port}`);
})


