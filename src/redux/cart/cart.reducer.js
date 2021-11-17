import cartType from './cart.types';
import { addItemToCart } from './utils/index';

const initstate = {
  // name: 'mustafa',
  cartItems: [],
};

const cartReducer = (state = initstate, action) => {
  switch (action.type) {
    case cartType.ADD_ITEM_TO_CART:
      // return { ...state, cartItems: [...state.cartItems, action.payload] };
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };

    case cartType.DELETE_ITEM_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter((item) => item._id !== action.payload) };

    default:
      return state;
  }
};

export default cartReducer;
