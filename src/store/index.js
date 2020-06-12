import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from './reducers';
import { loadState, saveState } from '../lib/localStorage';


const persistedState = loadState();
const store = createStore(combinedReducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
