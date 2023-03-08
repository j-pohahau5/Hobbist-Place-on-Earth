const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
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
    HobbyId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    ],
});

const Category = model('Category', categorySchema);

module.exports = Category;