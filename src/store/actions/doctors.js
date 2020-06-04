import axios from 'axios';
import Cookies from 'js-cookie';
import {
  LOADING_DOCTORS,
  GET_DOCTORS,
  GET_SPECIALITY_DOCTORS,
} from '../actionTypes';
import { url } from '../../config';
import { logoutUser } from './auth';

export const getDoctorsBySpeciality = specialityId => dispatch => {
  const token = Cookies.get('auth_token');
  dispatch({
    type: LOADING_DOCTORS,
  });

  axios
    .get(`${url}/specialities/${specialityId}`, {
      headers: { Authorization: token },
    })
    .then(data => {
      dispatch({
        type: GET_SPECIALITY_DOCTORS,
        speciality: data.data,
      });
    })
    .catch(err => {
      if (err.response.status === 422) {
        logoutUser(err.response.data.message);
      }
    });
};
export const getDoctors = () => dispatch => {
  const token = Cookies.get('auth_token');

  dispatch({
    type: LOADING_DOCTORS,
  });

  axios
    .get(`${url}/doctors`, {
      headers: { Authorization: token },
    })
    .then(data => {
      dispatch({
        type: GET_DOCTORS,
        doctors: data.data,
      });
    })
    .catch(err => {
      if (err.response.status === 422) {
        logoutUser(err.response.data.message);
      }
    });
};
