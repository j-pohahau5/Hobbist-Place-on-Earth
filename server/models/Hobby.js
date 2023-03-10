const { Schema, model } = require('mongoose');

const hobbySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength:1,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 500,
    },
    likes: {
        type: Number,
        default: 0,
    },
    disLikes: {
        type: Number,
        default: 0,
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
        // {
        //     content: {
        //       type: String,
        //       required: true,
        //       minlength: 1,
        //       maxlength: 280,
        //     }
        // }
        
    ],
    users: [
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