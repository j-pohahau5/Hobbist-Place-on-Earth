// const mongoose = require('mongoose');
const { Category, Hobby, User, Comment, Like } = require('../models');
const categorySeeds = require('./categorySeeds.json');
const hobbySeeds = require('./hobbySeeds.json');
const userSeeds = require('./userSeeds.json');
const commentSeeds = require('./comment.json');
const db = require('../config/connection')

const seedDatabase = async () => {
    try {

        await Category.deleteMany({});
        await Hobby.deleteMany({});
        await User.deleteMany({});
        // await Comment.deleteMany({});
        // await Like.deleteMany({});

        await Category.create(categorySeeds);
        console.log('Category data seeded');
        
        await Hobby.create(hobbySeeds);
        console.log('Hobby data seeded');
    
        await User.create(userSeeds);
        console.log('User data seeded');

        // await Comment.create(commentSeeds);
        // console.log('Comment data seeded');

        console.log('Seeding process complete!');
        // mongoose.set('strictQuery', true); // Add this line here
        // await mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        // await mongoose.disconnect();

    } catch (error) {
        console.error(error);
    }
};

seedDatabase();