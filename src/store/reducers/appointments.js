import { GET_APPOINTMENTS } from "../actionTypes";

export default (state={appointments:{}, isLoading:false},action)=>{
  switch (action.type) {
    case GET_APPOINTMENTS:
      return {...state, appointments:action.appointments, isLoading:false}
    default:
      return state
  }
}