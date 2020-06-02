import {
  LOADING_DOCTORS,
  GET_DOCTORS,
  GET_SPECIALITY_DOCTORS,
} from "../actionTypes";
import axios from "axios";
import { url } from "../../config";
import Cookies from "js-cookie";
import { logoutUser } from "./auth";

const token = localStorage.getItem("auth_token");
export const getDoctorsBySpeciality = (speciality_id) => (dispatch) => {
  dispatch({
    type: LOADING_DOCTORS,
  });

  axios
    .get(`${url}/specialities/${speciality_id}`, {
      headers: { Authorization: token },
    })
    .then((data) => {
      console.log(data.data);
      dispatch({
        type: GET_SPECIALITY_DOCTORS,
        speciality: data.data,
      });
    })
    .catch((err) => {
      if (err.response.status == 422) {
        logoutUser(err.response.data.message);
      }
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
    })
    .catch((err) => {
      if (err.response.status == 422) {
        logoutUser(err.response.data.message);
      }
    });
};
