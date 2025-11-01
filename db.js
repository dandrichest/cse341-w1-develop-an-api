require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

console.log('MongoDB URI:', process.env.MONGODB_URI); // Log the URI to check if it's loaded

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI); // Removed deprecated options
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;

