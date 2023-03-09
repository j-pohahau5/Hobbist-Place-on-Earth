const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 20,
    },
    description: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 500,
    },
    HobbyId: [
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

const Category = model('Category', categorySchema);

module.exports = Category;