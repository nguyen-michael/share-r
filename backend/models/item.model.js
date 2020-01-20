const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

// Schema model, takes object which is definition of schema, second parameter is an obj of schema options.
const itemSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    owner: { 
        type: ObjectId, 
        required: true 
    },
    description: { 
        type: String 
    },
    currentPossessor: { 
        type: ObjectId,
        required: true
    }
}, {
    timestamps: true
});

// Creates the model from the Schema, we use the "Model" as the "prototypical" document of that type.
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

