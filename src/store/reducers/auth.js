import * as ActionType from "../actionTypes";
export default (
  state = { user: {}, isLoading: false, isLoggedIn: false },
  action
) => {
  switch (action.type) {
    case ActionType.REGISTER:
      return { ...state, user: action.user, isLoggedIn: true };
    case ActionType.LOADING_REGISTER:
      return { ...state, isLoading: true };
    case ActionType.LOGIN:
      return {
        ...state,
        user:action.user,
        isLoading: false,
        isLoggedIn: true,
      };
    case ActionType.LOADING_LOGIN:
      return { ...state, isLoading: true };
    case ActionType.GET_USER:
      return { ...state, user: action.user, isLoggedIn: true };
    case ActionType.NO_TOKEN:
      return { ...state };
    case ActionType.LOGOUT:
      return {...state, user:{}, isLoggedIn:false}
    default:
      return state;
  }
};
