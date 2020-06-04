import Axios from 'axios';
import { LOADING_SPECIALITIES, GET_SPECIALITIES } from '../actionTypes';
import { url } from '../../config';
import { logoutUser } from './auth';

export const getSpecialities = () => dispatch => {
  dispatch({
    type: LOADING_SPECIALITIES,
  });

  Axios.get(`${url}/specialities`)
    .then(data => {
      dispatch({
        type: GET_SPECIALITIES,
        specialities: data.data,
      });
    })
    .catch(err => {
      if (err.response.status === 422) {
        logoutUser(err.response.data.message);
      }
    });
};
