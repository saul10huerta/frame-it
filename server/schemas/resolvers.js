const { User, Item, Order } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        // user: async (parent, args, context) => {
        //     if (context.user) {
        //       const user = await User.findById(context.user._id)
        //         .populate('items')
      
        //       //user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
        //       return user;
        //     }
      
        //     throw new AuthenticationError('Not logged in');
        // },
        user: async (parent, {username}) => {
          return User.findOne({ username })
            .select('-__v-password')
            .populate('items')
        },
        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('items')
            // .populate('thoughts');
        },
        // get user logged in
        me: async (parent, args, context) => {
          if(context.user) {
            const userData = await User.findOne({_id: context.user._id})
            .select('-__v -password')
            .populate('items');
            console.log(userData)
            return userData;
          }
          throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
          addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
          }, 
          addItem: async(parent, args, context) => {
            if(context.user) {
              const item = await Item.create({...args, username: context.user.username});

              await User.findByIdAndUpdate(
                { _id: context.user._id},
                { $push: { items: item._id } },
                { new: true }
              );
              console.log(item)
              console.log(context.user)
              return item;
            }

            throw new AuthenticationError('You need to be logged in item!');
          },
          removeItem: async (parent, args, context) => {
            if (context.user) {
              console.log(context.user.items)
              const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { items: args._id } },
                { new: true }
              );

              return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in.");
          }
          
    }
};

module.exports = resolvers;