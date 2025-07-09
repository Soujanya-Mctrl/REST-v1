// This is a simple Express server that connects to a MongoDB database.
require('dotenv').config();

const e = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
    .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', (open) => console.log('connected to database'));

app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Server is running');
});
