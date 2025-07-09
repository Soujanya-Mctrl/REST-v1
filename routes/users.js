const express = require('express');
const router = express.Router();
const User = require('../models/user');

//Gettting all users
router.get('/', async (req, res) => {
    // This route retrieves all users from the database
    // and returns them as a JSON response.
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});

//Getting one user by ID
router.get('/:id', getUser, (req, res) => {
    res.send(res.user.key);
    
});

//Creating a user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        key: req.body.key
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Updating a user
router.post('/:id', async (req, res) => {

    
});

//Deleting a user
router.delete('/:id', async (req, res) => {
    req.params.id;
});

async function getUser(req, res, next) {
    // This middleware function retrieves a user by ID
    // and attaches it to the request object for use in subsequent  
    // middleware or route handlers.

    let user;
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: err.message });

    }

    res.user = user;
    next();

}

module.exports = router;