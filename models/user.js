const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    key: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
// This code defines a Mongoose schema for a User model with fields for name, email,