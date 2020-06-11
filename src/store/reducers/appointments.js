import { GET_APPOINTMENTS, LOGIN_SUCCESS, LOADING_APPOINTMENTS, BOOK_APPOINTMENT } from '../actionTypes';

export default (state = { appointments: [], isLoading: false, isDone: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, appointments: [] };
    case GET_APPOINTMENTS:
      return { ...state, appointments: action.appointments, isLoading: false, isDone:false };
    case LOADING_APPOINTMENTS:
      return {...state, isLoading:true, isDone:false}
    case BOOK_APPOINTMENT:
      return {...state, isLoading: false, isDone:true}
    default:
      return state;
  }
};
