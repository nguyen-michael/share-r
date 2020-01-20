const router = require('express').Router();
let Item = require('../models/item.model');

// These routes will all be prefixed "/items"

// Route to get ALL items
// Why would we need this? 
router.route('/').get((req, res) => {
    Item
        .find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error getting all items: ' + err));
});

// Route to get ALL Items from a specified user
router.route('/user/:user_id').get((req, res) => {
    const ownerId = req.params.user_id

    Item
        .find({ owner: ownerId })
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error getting all items belonging to user id: ' + err));
});

// Get items by Id
router.route('/:id').get((req, res) => {
    Item
        .findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error finding item by Id: ' + err));
});

// Create New item, will throw error if not unique username (per schema)
router.route('/create-new').post((req, res) => {
    const name = req.body.name;
    const owner = req.body.ownerId;
    const description = req.body.description || '';
    // Created by owner, so will take owner Id initially.
    const currentPossessor = req.body.ownerId;

    const newItem = new Item({
        name,
        owner,
        description,
        currentPossessor
    });

    newItem
        .save()
        .then(() => res.json('Item Created!'))
        .catch(err => res.status(400).json('Error creating new item: ' + err));
});

// Edit/ Update items

// Change possessor

// Delete Item
router.route('/:id').delete((req, res) => {
    Item
        .findByIdAndDelete(req.params.id)
        .then(() => res.json("Item Deleted."))
        .catch(err => res.status(400).json('Error deleting item by Id: ' + err));
});
module.exports = router;