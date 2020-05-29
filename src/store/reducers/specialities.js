import { GET_SPECIALITIES, LOADING_SPECIALITIES } from "../actionTypes";

export default (state={specialities:{}, isLoading:false}, action)=>{
  switch (action.type) {
    case GET_SPECIALITIES:
      return {...state, specialities:action.specialities, isLoading:false }
    case LOADING_SPECIALITIES:
      return{...state, isLoading:true}
  
    default:
      return state
  }
}