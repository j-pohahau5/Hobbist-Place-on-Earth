const { Schema, model } = require('mongoose');

const hobbySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 20,
    },
    description: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 500,
    },
    categoryID: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Hobby',
        },
    ],
    userID: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],  
});

const Hobby = model('Hobby', hobbySchema);

module.exports = Hobby;

// Title, description, category_Id, Users_ID
// UUID 
// Has Title, description, category; length validation on title and description
// Has many users,
// Has many likes,
// Has many comments