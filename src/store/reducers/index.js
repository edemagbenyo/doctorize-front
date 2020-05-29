import { combineReducers } from "redux";
import auth from './auth';
import appointments from './appointments';
import doctors from './doctors';
import specialities from './specialities';
export default combineReducers({auth, appointments, doctors, specialities})