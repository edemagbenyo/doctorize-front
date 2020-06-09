import { GET_APPOINTMENTS, LOGIN_SUCCESS } from '../actionTypes';

export default (state = { appointments: [], isLoading: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, appointments: [] };
    case GET_APPOINTMENTS:
      return { ...state, appointments: action.appointments, isLoading: false };
    default:
      return state;
  }
};
