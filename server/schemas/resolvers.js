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
          }
          
    }
};

module.exports = resolvers;