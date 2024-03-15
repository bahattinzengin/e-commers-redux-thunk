import {applyMiddleware , combineReducers,createStore} from 'redux';
import productReducer from './reducers/productReducer.js';
import basketReducer from './reducers/basketReducer.js';
import thunk from 'redux-thunk';


const rootReducer =combineReducers({
    productReducer,basketReducer,
});

export default createStore (rootReducer,applyMiddleware(thunk));