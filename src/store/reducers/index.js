import { combineReducers } from 'redux';
import auth from './auth';
import appointments from './appointments';
import doctors from './doctors';
import specialities from './specialities';
import healthinfo from './healthinfo';

export default combineReducers({
  auth, appointments, doctors, specialities, healthinfo,
});
