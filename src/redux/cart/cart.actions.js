import cartType from './cart.types';

export const addItemToCart = (item) => ({
  type: cartType.ADD_ITEM_TO_CART,
  payload: item,
});

export const deleteItemFromCart = (_id) => ({
  type: cartType.DELETE_ITEM_FROM_CART,
  payload: _id,
});
