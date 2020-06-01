import {
  LOADING_DOCTORS,
  GET_DOCTORS,
  GET_SPECIALITY_DOCTORS,
} from "../actionTypes";
import axios from "axios";
import { url } from "../../config";
import Cookies from "js-cookie";

const token = Cookies.get("auth_token");

export const getDoctorsBySpeciality = (speciality_id) => (dispatch) => {
  dispatch({
    type: LOADING_DOCTORS,
  });

  axios
    .get(`${url}/specialities/${speciality_id}/doctors`, {
      headers: { Authorization: token },
    })
    .then((data) => {
      dispatch({
        type: GET_SPECIALITY_DOCTORS,
        doctors: data.data,
      });
    });
};
export const getDoctors = () => (dispatch) => {
  dispatch({
    type: LOADING_DOCTORS,
  });

  axios
    .get(`${url}/doctors`, {
      headers: { Authorization: token },
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: GET_DOCTORS,
        doctors: data.data,
      });
    });
};
export const bookAppointment = (doctor_id) => (dispatch) => {
  //TODO : Book appointnemtn
};
