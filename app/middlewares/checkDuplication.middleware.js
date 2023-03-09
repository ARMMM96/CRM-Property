const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Define middleware function to check for duplication of any data attribute
const checkDuplicate = (modelName, attributeName) => async (req, res, next) => {
    const value = req.body[attributeName];
    const duplicate = await modelName.findOne({ [attributeName]: value });
    if (duplicate) {
        return res.status(409).json({ message: `${attributeName} already exists` });
    }
    next();
};

// Define route handler function to create new user
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.json(user);
};

// Define API route and add middleware function as parameter
router.post('/users', checkDuplicate(User, 'email'), createUser);

module.exports = router;