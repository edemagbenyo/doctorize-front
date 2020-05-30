import { GET_HEALTHINFO, LOADING_HEALTHINFO } from "../actionTypes";

export default (state = { healthinfo: {}, isLoading:false }, action) => {
  switch (action.type) {
    case GET_HEALTHINFO:
      return { ...state , healthinfo:action.healthinfo, isLoading:false};
    case LOADING_HEALTHINFO:
      return {...state, isLoading:true}
    default:
      return state;
  }
};
