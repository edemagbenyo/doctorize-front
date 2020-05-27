import * as ActionType from '../actionTypes';
export default (state={user:{}, isLoading:false},action)=>{
  switch (action.type) {
    case ActionType.REGISTER:
      return {...state, user:action.user }
    case ActionType.LOADING_REGISTER:
      return {...state, isLoading:true }
    case ActionType.LOGIN:
      return {...state, user:action.user }
    case ActionType.LOADING_LOGIN:
      return {...state, isLoading:true }
    default:
      return state
  }
}