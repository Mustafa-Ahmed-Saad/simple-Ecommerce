import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import productsReducer from './products/products.reducer';
import ProductReducer from './single-product/product.reducer';
import userReducer from './user/user.reducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  product: ProductReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart', 'loginInfo'],
};

export default persistReducer(persistConfig, rootReducer);
