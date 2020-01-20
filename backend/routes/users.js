const router = require('express').Router();
let User = require('../models/user.model');

// These routes will all be prefixed "/users"

// Route to Get all users
router.route('/').get((req, res) => {
    User
        .find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error getting all users: ' + err));
});

// Find by id
router.route('/:id').get((req, res) => {
    User
        .findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error getting user by id: ' + err));
});

// Find by username
// Might have to convert whitespace and symbols
router.route('/username/:username').get((req, res) => {
    const username = req.params.username;

    User
        .find({username: username})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error getting user by username: ' + err));
});

// Create New User, will throw error if not unique username (per schema)
router.route('/create-new').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser
        .save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error creating new user: ' + err));
});

// Update / Edit user 
// Can be used later for "profile" stuff. Or changing usernames

// Delete user
router.route('/:id').delete((req, res) => {
    User
        .findByIdAndDelete(req.params.id)
        .then(() => res.json("User Deleted."))
        .catch(err => res.status(400).json('Error deleting user by Id: ' + err));
});

module.exports = router;