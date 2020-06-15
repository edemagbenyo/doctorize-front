import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './reducers';
import { loadState, saveState } from '../lib/localStorage';


const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-disable no-underscore-dangle */
const store = createStore(combinedReducers, persistedState, composeEnhancers(
  applyMiddleware(thunk)
));
/* eslint-enable */

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
