import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import combinedReducers from './reducers';
export default createStore(combinedReducers, applyMiddleware(thunk))