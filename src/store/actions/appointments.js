import axios from 'axios';
import moment from 'moment';
import Cookies from 'js-cookie';
import { url } from '../../config';
import { BOOK_APPOINTMENT, GET_APPOINTMENTS, LOADING_APPOINTMENTS } from '../actionTypes';
import { addFlashMessage } from './flashMessages';

export const bookAppointment = data => dispatch => {
  const token = Cookies.get('auth_token');

  // Loading booking...
  dispatch({
    type: LOADING_APPOINTMENTS,
  });
  const momentDate = moment(data.date);
  axios
    .post(
      `${url}/appointments`,
      { ...data, date: momentDate.format('YYYY-MM-DD'), time: momentDate.format('HH:mm:ss') },
      { headers: { Authorization: token } },
    )
    .then(({ data }) => {
      dispatch(addFlashMessage({
        type:'success',
        text:'Appointment booked successfully!'
      }))
      dispatch({
        type: BOOK_APPOINTMENT,
      });
    }).catch(
      err => err.response,
    );
};

// get appointments for current logged in user.
export const getAppointments = () => dispatch => {
  const token = Cookies.get('auth_token');

  axios
    .get(
      `${url}/appointments`,
      { headers: { Authorization: token } },
    )
    .then(({ data }) => {
      dispatch({
        type: GET_APPOINTMENTS,
        appointments: data,
      });
    }).catch(
      err => err.response,
    );
};
// get appointments for current logged in user.
export const getDoctorAppointments = () => dispatch => {
  const token = Cookies.get('auth_token');

  axios
    .get(
      `${url}/appointments`,
      { headers: { Authorization: token } },
    )
    .then(({ data }) => {
      dispatch({
        type: GET_APPOINTMENTS,
        appointments: data,
      });
    }).catch(
      err => err.response,
    );
};
