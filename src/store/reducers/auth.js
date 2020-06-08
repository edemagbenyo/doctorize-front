import * as ActionType from '../actionTypes';

export default (
  state = {
    user: {},
    doctor: null,
    userType: 'patient',
    healthinfo: {},
    isLoading: false,
    isLoggedIn: false,
    isServerDown:false
  },
  action,
) => {
  switch (action.type) {
    case ActionType.REGISTER:
      return {
        ...state,
        user: action.user,
        doctor: action.doctor,
        isLoggedIn: true,
        userType: action.userType,
        isServerDown:false,
      };
    case ActionType.LOADING_REGISTER:
      return { ...state, isLoading: true, isServerDown:false, };
    case ActionType.LOGIN:
      return {
        ...state,
        userType: action.userType,
        doctor: action.doctor,
        user: action.user,
        isLoading: false,
        isLoggedIn: true,
        isServerDown:false,
      };
    case ActionType.LOADING_LOGIN:
      return { ...state, isLoading: true, isServerDown:false, };
    case ActionType.GET_USER:
      return { ...state, user: action.user, isLoggedIn: true , isServerDown:false,};
    case ActionType.NO_TOKEN:
      return { ...state };
    case ActionType.LOGOUT:
      return { ...state, user: {}, isLoggedIn: false, isServerDown:false, };
    case ActionType.SERVER_DOWN:
      return {...state, isServerDown:true}
    default:
      return state;
  }
};
