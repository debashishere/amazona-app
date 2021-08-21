import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import  thunk  from 'redux-thunk'
import { productListReducer } from './reducers/productReducers';

const initialState = {};
// reducer is a function accept two params
// and return  a new state
const reducer = combineReducers({
    productList: productListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create a redux store
// takes reducer and initial state as params
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
