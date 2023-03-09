const { AuthenticationError } = require("apollo-server-express");
const { User, Hobby, Comment, Category } = require("../models");
const bcrypt = require("bcrypt");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    //   .populate("hobbies")
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    //   .populate("hobbies")
    },
    categories: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Category.find(params).sort({ createdAt: -1 });
    },
    category: async (parent, { categoryId }) => {
      return Category.findOne({ _id: categoryId });
    //   .populate("hobbies")
    },
    hobbies: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Hobby.find(params).sort({ createdAt: -1 });

    },
    hobby: async (parent, { hobbyId }) => {
        return Hobby.findOne({ _id: hobbyId });
        // .populate("comments")
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
        // .populate("hobbies")
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // getHobbies: async () => {
    //   try {
    //     const hobbies = await Hobby.find().sort({ likes: -1 });
    //     return hobbies;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // getHobbiesByCategory: async (_, { Category }) => {
    //   try {
    //     const hobbies = await Hobby.find({ Category }).sort({ likes: -1 });
    //     return hobbies;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // getHobbyById: async (_, { hobbyId }) => {
    //   try {
    //     const hobby = await Hobby.findById(hobbyId);
    //     return hobby;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // getComments: async (_, { hobbyId }) => {
    //   try {
    //     const comments = await Comment.find({ hobbyId });
    //     return comments;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // getCategories: async () => {
    //   try {
    //     const categories = await Category.find();
    //     return categories;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },
    // // this is for the user to get to their profile and see only their hobbies
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
      
        const category = await Category.create({
          title,
          description,
        });

        

        return category;
      
      
    },
    // if (context.user) {}
    // await User.findOneAndUpdate(
    //     { _id: context.user._id },
    //     { $addToSet: { categoryId: category._id } }
    //   );
    // throw new AuthenticationError("You need to be logged in!");
    addHobby: async (parent, { title, description }, context) => {
      if (context.user) {
        const hobby = await Hobby.create({
          title,
          description,
        });
        await Category.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { hobbyId: hobby._id } }
        );
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { hobbyId: hobby._id } }
        );

        return hobby;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { hobbyId, content }, context) => {
      if (context.user) {
        return Hobby.findOneAndUpdate(
          { _id: hobbyId },
          {
            $addToSet: {
              comments: { content },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeCategory: async (parent, { categoryId }, context) => {
      if (context.user) {
        const category = await Category.findOneAndDelete({
          _id: categoryId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { categoryId: category._id } }
        );

        return category;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeHobby: async (parent, { categoryId, hobbyId }, context) => {
      if (context.user) {
        return Category.findOneAndUpdate(
          { _id: categoryId },
          {
            $pull: {
              hobbies: {
                _id: hobbyId,
                title,
                description,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { hobbyId, commentId }, context) => {
      if (context.user) {
        return Hobby.findOneAndUpdate(
          { _id: hobbyId },
          {
            $pull: {
              comments: {
                _id: commentId,
                content,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // registerUser: async (_, { username, password }) => {
    //   try {
    //     const existingUser = await User.findOne({ username });
    //     if (existingUser) throw new Error("Username already exists");

    //     const hashedPassword = await bcrypt.hash(password, 12);
    //     const newUser = new User({
    //       username,
    //       password: hashedPassword,
    //     });
    //     const savedUser = await newUser.save();

    //     const token = signToken(savedUser);

    //     return { user: savedUser, token };
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },
    // loginUser: async (_, { username, password }) => {
    //   try {
    //     const user = await User.findOne({ username });
    //     if (!user) throw new Error("User not found");

    //     const isPasswordCorrect = await bcrypt.compare(password, user.password);
    //     if (!isPasswordCorrect) throw new Error("Invalid password");

    //     const token = signToken(user);

    //     return { user, token };
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // logoutUser: async (_, _, { req }) => {
    //   try {
    //     if (!req.user) throw new Error("You are not authenticated");

    //     req.user.tokens = req.user.tokens.filter((token) => {
    //       token.token !== req.token;
    //     });
    //     await req.user.save();

    //     return { message: "Successfully logged out" };
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },
    // addHobby: async (_, { title, description, category }) => {
    //   try {
    //     const newHobby = new Hobby({
    //       title,
    //       description,
    //       category,
    //       likes: 0,
    //     });
    //     const savedHobby = await newHobby.save();
    //     return savedHobby;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // updateHobby: async (_, { hobbyId, title, description, category }) => {
    //   try {
    //     const hobby = await Hobby.findByIdAndUpdate(
    //       hobbyId,
    //       { $set: { title, description, category } },
    //       { new: true }
    //     );
    //     if (!hobby) throw new Error("Hobby not found");
    //     return hobby;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // deleteHobby: async (_, { hobbyId }) => {
    //   try {
    //     const hobby = await Hobby.findByIdAndRemove(hobbyId);
    //     if (!hobby) throw new Error("Hobby not found");
    //     return hobby;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // toggleLikeForHobby: async (_, { hobbyId, userId }) => {
    //   try {
    //     const hobby = await Hobby.findById(hobbyId);
    //     if (!hobby) throw new Error("Hobby not found");

    //     const userLikedIndex = hobby.likes.findIndex(
    //       (like) => like.userId == userId
    //     );
    //     if (userLikedIndex !== -1) {
    //       return await resolvers.Mutation.removeLikeFromHobby(_, {
    //         hobbyId,
    //         userId,
    //       });
    //     } else {
    //       return await resolvers.Mutation.addLikeToHobby(_, {
    //         hobbyId,
    //         userId,
    //       });
    //     }
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // addLikeToHobby: async (_, { hobbyId, userId }) => {
    //   try {
    //     const hobby = await Hobby.findById(hobbyId);
    //     if (!hobby) throw new Error("Hobby not found");

    //     hobby.likes.push({ userId });
    //     const updatedHobby = await hobby.save();

    //     const user = await User.findById(userId);
    //     if (!user) throw new Error("User not found");
    //     user.hobbies.push(hobbyId);
    //     const updatedUser = await user.save();

    //     return updatedHobby, updatedUser({ new: true });
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // removeLikeFromHobby: async (_, { hobbyId, userId }) => {
    //   try {
    //     const hobby = await Hobby.findById(hobbyId);
    //     if (!hobby) throw new Error("Hobby not found");

    //     const userLikedIndex = hobby.likes.findIndex(
    //       (like) => like.userId == userId
    //     );
    //     if (userLikedIndex === -1)
    //       throw new Error("User has not liked this hobby");

    //     hobby.likes.splice(userLikedIndex, 1);
    //     const updatedHobby = await hobby.save();

    //     const user = await User.findById(userId);
    //     if (!user) throw new Error("User not found");
    //     const hobbyIndex = user.hobbies.indexOf(hobbyId);
    //     if (hobbyIndex === -1) throw new Error("User does not have this hobby");
    //     if (hobbyIndex === -1) throw new Error("User does not have this hobby");
    //     user.hobbies.splice(hobbyIndex, 1);
    //     const updatedUser = await user.save();

    //     return updatedHobby, updatedUser({ new: true });
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // addComment: async (_, { hobbyId, userId, content }) => {
    //   try {
    //     const hobby = await Hobby.findById(hobbyId);
    //     if (!hobby) throw new Error("Hobby not found");

    //     const user = await User.findById(userId);
    //     if (!user) throw new Error("User not found");

    //     const newComment = new Comment({ content, user: userId });
    //     hobby.comments.push(newComment);
    //     const updatedHobby = await hobby.save();

    //     return updatedHobby;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // updateComment: async (_, { commentId, content }) => {
    //   try {
    //     const comment = await Comment.findByIdAndUpdate(
    //       commentId,
    //       { $set: { content } },
    //       { new: true }
    //     );
    //     if (!comment) throw new Error("Comment not found");
    //     return comment;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // deleteComment: async (_, { commentId }) => {
    //   try {
    //     const comment = await Comment.findByIdAndRemove(commentId);
    //     if (!comment) throw new Error("comment not found");
    //     return comment;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // addCommentLike: async (_, { commentId }) => {
    //   try {
    //     const comment = await comment.findById(commentId);
    //     if (!comment) throw new Error("Comment not found");

    //     comment.likes++;
    //     const updatedComment = await comment.save();
    //     return updatedComment;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // removeCommentLike: async (_, { commentId, userId }) => {
    //   try {
    //     const comment = await Comment.findById(commentId);
    //     if (!comment) throw new Error("Comment not found");

    //     const userLikedIndex = comment.likes.findIndex((like) => {
    //       like.userId == userId;
    //     });
    //     if (userLikedIndex === -1)
    //       throw new Error("User has not liked this comment");

    //     comment.likes.splice(userLikedIndex, 1);
    //     const updatedComment = await comment.save();

    //     return updatedComment;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // removeUser: async (_, { userId }) => {
    //   try {
    //     await Hobby.updateMany(
    //       { likes: { $eleMatch: { userId } } },
    //       { $pull: { likes: { userId } } }
    //     );
    //     await Comment.deleteMany({ userId });
    //     const removedUser = await User.findByIdAndRemove(userId);
    //     return removedUser;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // addCategory: async (_, { title }) => {
    //   try {
    //     const newCategory = new Category({
    //       title,
    //     });
    //     const savedCategory = await newCategory.save();
    //     return savedCategory;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // updateCategory: async (_, { categoryId, title, description }) => {
    //   try {
    //     const category = await Category.findByIdAndUpdate(
    //       categoryId,
    //       { $set: { title, description } },
    //       { new: true }
    //     );
    //     if (!category) throw new Error("Category not found");
    //     return category;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },

    // deleteCategory: async (_, { categoryId }) => {
    //   try {
    //     const category = await Category.findByIdAndRemove(categoryId);
    //     if (!category) throw new Error("Category not found");
    //     return category;
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },
  },
};

module.exports = resolvers;
