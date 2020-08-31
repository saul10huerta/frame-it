
import { useReducer } from 'react';
import {
  UPDATE_ITEMS,
  //UPDATE_CATEGORIES,
  //UPDATE_CURRENT_CATEGORY,
  //ADD_TO_CART,
  //ADD_MULTIPLE_TO_CART,
  //REMOVE_FROM_CART,
  //UPDATE_CART_QUANTITY,
  //CLEAR_CART,
  //TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_ITEMS`, return a new state object with an updated products array
    case UPDATE_ITEMS:
      return {
        ...state,
        items: [...action.items]
      };
    default:
      return state;
  }
};

export function useItemReducer(initialState) {
  return useReducer(reducer, initialState);
}