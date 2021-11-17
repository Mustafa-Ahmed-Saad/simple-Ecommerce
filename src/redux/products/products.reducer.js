import productsType from './products.type';

const initstate = {
  // name: 'mustafa',
  products: [],
  loading: false,
  error: false,
};

const productsReducer = (state = initstate, action) => {
  switch (action.type) {
    case productsType.PRODUCTS_REQUEST_FETCH:
      return { ...state, loading: true };

    case productsType.PRODUCTS_REQUEST_SUCCESS:
      // return { ...state, cartItems: [...state.cartItems, action.payload] };
      return { ...state, products: action.payload, loading: false, error: false };

    case productsType.PRODUCTS_REQUEST_ERROR:
      // return { ...state, cartItems: [...state.cartItems, action.payload] };
      return { ...state, error: action.payload, loading: false };

    case productsType.PRODUCTS_CHANGE:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default productsReducer;
