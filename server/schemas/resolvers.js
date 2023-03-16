const { AuthenticationError } = require("apollo-server-express");
const { User, Hobby, Comment, Category } = require("../models");
const bcrypt = require("bcrypt");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("hobbies").populate("comments");
      //   
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("hobbies").populate("comments");
    },
    categories: async (parent, { username }) => {
      const params = username ? { username } : {};
      return await Category.find(params).sort({ createdAt: -1 }).populate("hobbies").populate("users");
    },
    // .populate("comments")
    category: async (parent, { categoryId }) => {
      return Category.findOne({ _id: categoryId }).populate("hobbies").populate("users");
    },
      //   .populate("comments")
    comments: async (parent, { hobbies }) => {
      return Comment.find({ hobbies }).populate("users").populate("hobbies")
        // .populate("comments")
    },
    hobbies: async (parent, { categories }) => {
      const params = categories ? { categories } : {};
      return Hobby.find(params).sort({ createdAt: -1 }).populate("categories").populate("comments").populate("users");
      // 
      // .populate("commentID")
      // .populate("userID");
    },
    hobby: async (parent, { hobbyId }) => {
      return Hobby.findOne({ _id: hobbyId }).populate("categories").populate("comments").populate("users");
      // 
      // 
      // .populate("userID");
      // .populate("comments")
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("hobbies");
        // 
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate("hobbies");
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addCategory: async (parent, { title, description }, context) => {
      if (context.user._id) {
        console.log(context.user);
        const category = await Category.create({
          title,
          description,
        })
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { categories: category._id } }
        );
        return category;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addHobby: async (parent, { title, description, categories }, context) => {
      console.log(context.user)
      if (context.user) {
        const hobby = await Hobby.create({
          title,
          description,
          categories
        });
        await Category.findOneAndUpdate(
          { categories },
          { $addToSet: { hobbies: hobby.id } }
        );
        await User.findOneAndUpdate(
          { _id: context.user },
          { $addToSet: { hobbies: hobby.id } }
        );
        console.log(hobby)
        return hobby;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { hobbies, content }, context) => {
      if (context.user) {
        // const id = context.user._id;
        // const username = context.user.username;
        const comment = await Comment.create({
          content,
          hobbies, 
          users: context.user._id, 
        });
        await Hobby.findOneAndUpdate(
          { _id: hobbies },
          {
            $addToSet: {
              comments: comment._id,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        await User.findOneAndUpdate(
          { _id:  context.user._id},
          { $addToSet: { comments: comment._id } }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addHobbyLike: async (parent, { _id, likes }) => {
      if (context.user) {
        const hobby = await Hobby.findOneAndUpdate(
          { _id },
          { $inc: { [likes]: 1 } },
          { new: true }
        );
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { hobbies: hobby._id } }
        );
        return hobby;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addCommentLike: async (parent, { _id, likes }) => {
      if (context.user) {
        const comment = await Comment.findOneAndUpdate(
          { _id },
          { $inc: { [likes]: 1 } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addHobbyDislike: async (parent, { _id, dislikes }) => {
      if (context.user) {
        const hobby = await Hobby.findOneAndUpdate(
          { _id },
          { $inc: { [dislikes]: 1 } },
          { new: true }
        );
        return hobby;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addCommentDislike: async (parent, { _id, dislikes }) => {
      if (context.user) {
        const comment = await Comment.findOneAndUpdate(
          { _id },
          { $inc: { [dislikes]: 1 } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeCategory: async (parent, { categoryId }, context) => {
      // if (context.user) {
        const category = await Category.findOneAndDelete({
          _id: categoryId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { categories: category._id } }
        );

        return category;
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    removeHobby: async (parent, { hobbyId, categoryId }, context) => {
      if (context.user) {
        const hobby = await Hobby.findOneAndDelete({
          _id: hobbyId,
        });
        await Category.findOneAndUpdate(
          { _id: categoryId },
          { $pull: { hobbies: hobby._id } },
          { new: true }
        );
        // await Comment.findAndUpdate(
        //   { _id: commentId },
        //   { $pull: { hobbies: hobby._id } },
        //   { new: true }
        // );
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { hobbies: hobby._id } }
        );
        return hobby;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { hobbyId, commentId }, context) => {
      // if (context.user) {
        const comment = await Comment.findOneAndDelete({
          _id: commentId,
        });
        return Hobby.findOneAndUpdate(
          { _id: hobbyId },
          { $pull: { comments: comment._id } },
          { new: true }
        );
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },
    removeHobbyLike: async (parent, { _id, likes }) => {
      if (context.user) {
        const hobby = await Hobby.findOneAndUpdate(
          { _id },
          { $inc: { [likes]: -1 } },
          { new: true }
        );
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { hobbies: hobby._id } }
        );
        return hobby;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeCommentLike: async (parent, { _id, likes }) => {
      if (context.user) {
        const comment = await Comment.findOneAndUpdate(
          { _id },
          { $inc: { [likes]: -1 } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeHobbyDislike: async (parent, { _id, dislikes }) => {
      if (context.user) {
        const hobby = await Hobby.findOneAndUpdate(
          { _id },
          { $inc: { [dislikes]: -1 } },
          { new: true }
        );
        return hobby;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeCommentDislike: async (parent, { _id, dislikes }) => {
      if (context.user) {
        const comment = await Comment.findOneAndUpdate(
          { _id },
          { $inc: { [dislikes]: -1 } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
