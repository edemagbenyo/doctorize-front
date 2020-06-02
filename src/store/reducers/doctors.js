import {
  GET_DOCTORS,
  GET_SPECIALITY_DOCTORS,
  LOADING_DOCTORS,
} from "../actionTypes";

export default (
  state = { doctors: {}, isLoading: false, flash: null, speciality:null },
  action
) => {
  switch (action.type) {
    case GET_DOCTORS:
      return { ...state, doctors: action.doctors, isLoading:false , speciality:null };
    case GET_SPECIALITY_DOCTORS:
      return { ...state, doctors: action.speciality.doctors, isLoading: false, speciality:action.speciality };
    case LOADING_DOCTORS:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
