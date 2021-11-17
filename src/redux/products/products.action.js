import axios from 'axios';
import productsType from './products.type';

export const featchProducts = () => async (dispatch, getState) => {
  dispatch({ type: productsType.PRODUCTS_REQUEST_FETCH });

  try {
    const {
      data: { products },
    } = await axios.get('https://naga-electron.herokuapp.com/api/v1/products');
    dispatch({ type: productsType.PRODUCTS_REQUEST_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: productsType.PRODUCTS_REQUEST_ERROR, payload: error.message });
  }
};

export const productsChange = (newProducts) => ({
  type: productsType.PRODUCTS_CHANGE,
  payload: newProducts,
});
