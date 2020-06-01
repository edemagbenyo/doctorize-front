import {
  GET_DOCTORS,
  GET_SPECIALITY_DOCTORS,
  LOADING_DOCTORS,
} from "../actionTypes";

export default (
  state = { doctors: {}, isLoading: false, flash: null },
  action
) => {
  switch (action.type) {
    case GET_DOCTORS:
      return { ...state, doctors: action.doctors, isLoading:false };
    case GET_SPECIALITY_DOCTORS:
      return { ...state, doctors: action.doctors, isLoading: false };
    case LOADING_DOCTORS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
