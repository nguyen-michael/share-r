const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema model, takes object which is definition of schema, second parameter is an obj of schema options.
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 60
    },
}, {
    timestamps: true
});

// Creates the model from the Schema, we use the "Model" as the "prototypical" document of that type.
const User = mongoose.model('User', userSchema);

module.exports = User;
