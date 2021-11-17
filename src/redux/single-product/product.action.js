import axios from 'axios';
import productType from './product.type';

export const featchSingleProduct = (id) => async (dispatch, getState) => {
  dispatch({ type: productType.PRODUCT_REQUEST_FEATCH });
  try {
    const res = await axios.get(`https://naga-electron.herokuapp.com/api/v1/products/${id}`);
    const { product } = res.data;
    dispatch({ type: productType.PRODUCT_REQUEST_SUCCESS, payload: product });
  } catch (error) {
    dispatch({ type: productType.PRODUCT_REQUEST_ERROR, payload: error.message });
  }
};
