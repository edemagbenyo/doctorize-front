import { GET_HEALTHINFO, LOADING_HEALTHINFO, UPDATE_HEALTHINFO } from "../actionTypes";

export default (state = { healthinfo: {}, isLoading:false, flash:null }, action) => {
  switch (action.type) {
    case GET_HEALTHINFO:
      return { ...state , healthinfo:action.healthinfo, isLoading:false};
    case UPDATE_HEALTHINFO:
      return {...state, flash:action.flash}
    case LOADING_HEALTHINFO:
      return {...state, isLoading:true}
    default:
      return state;
  }
};
