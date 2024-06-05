// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requestLogger = require('./middleware/requestLogger');
const bookRoutes = require('./routes/books');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.json());

// Configure the request logger middleware with custom log file path
app.use(requestLogger);

// Routes
app.use('/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
