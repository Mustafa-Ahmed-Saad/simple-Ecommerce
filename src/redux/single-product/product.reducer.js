import productType from './product.type';

const initState = {
  product: {},
  loading: false,
  error: false,
};

const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case productType.PRODUCT_REQUEST_FEATCH:
      return { ...state, loading: true };
    case productType.PRODUCT_REQUEST_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case productType.PRODUCT_REQUEST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
