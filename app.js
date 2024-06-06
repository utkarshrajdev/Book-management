const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requestLogger = require('./middleware/requestLogger');
const bookRoutes = require('./routes/books');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.json());
app.use(requestLogger);

// Routes
app.use('/books', bookRoutes);

// Route to view logs
app.get('/view-logs', (req, res) => {
    const logFilePath = process.env.LOG_FILE_PATH;

    fs.readFile(logFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading log file');
        }
        res.send(`<pre>${data}</pre>`);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
