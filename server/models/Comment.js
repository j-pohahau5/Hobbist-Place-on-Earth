const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    content: {
        type: String, 
        required: true, 
        unique: true,
        minlength: 1,
        maxlength: 500,
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    hobbies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Hobby',
        },
    ],
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;

