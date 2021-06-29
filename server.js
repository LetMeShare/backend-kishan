const express = require('express');

const app = express();
const connectDB = require('./config/db');
connectDB();

// Port definition
const port = process.env | 200;
const path = require('path');
app.use(express.static('public'));
app.use(express.json());
// Template Engine Configuration
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'))



app.listen(port, (req, res) => {
    console.log(`Server is listening on port -> ${port}`);
})


