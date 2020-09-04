const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Order } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                populate: 'item'
              });
      
              //user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
            .select('-__v -password');
            // .populate('friends')
            // .populate('thoughts');
        },
        me: async (parent, args, context) => {
          if(context.user) {
            const userData = await User.findOne({_id: context.user._id})
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
                { _id: context.user_id},
                { $push: { items: item._id } },
                { new: true }
              );

              return item;
            }

            throw new AuthenticationError('You need to be logged in!');
          }
          
    }
};

module.exports = resolvers;