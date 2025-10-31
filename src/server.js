const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');
const connectDB = require('../db'); // Import the MongoDB connection

const app = express();
const PORT = 8080;

connectDB(); // Connect to MongoDB

app.use(express.json());

// Simple CORS for development
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Serve frontend static files from the frontend folder at project root
const frontendPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(frontendPath));

// API routes
app.use('/api', apiRoutes);

// Serve index.html for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});