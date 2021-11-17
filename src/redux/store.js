import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import persistReducer from './index';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const middleWares = [logger, thunk];
const initialState = {};

const store = createStore(persistReducer, initialState, composeWithDevTools(applyMiddleware(...middleWares)));

const persistor = persistStore(store);

export { store, persistor };
