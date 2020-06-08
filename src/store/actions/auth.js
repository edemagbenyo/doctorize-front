import axios from 'axios';
import Cookies from 'js-cookie';
import {
  LOADING_LOGIN,
  LOGIN_FAILURE,
  LOGIN,
  GET_USER,
  NO_TOKEN,
  LOGOUT,
  LOADING_REGISTER,
  REGISTER,
  ERROR_REGISTER,
  SERVER_DOWN
} from '../actionTypes';
import { url } from '../../config';

export const loginUser = ({ username, password }) => dispatch => {
  dispatch({
    type: LOADING_LOGIN,
  });

  axios
    .post(`${url}/auth/login`, { username, password })
    .then(data => {
      // Set the token in secure cookie.

      if (data.data) {
        saveInCookies(data.data);
        dispatch({
          type: LOGIN,
          user: data.data.user,
          userType: data.data.doctor ? 'doctor' : 'patient',
          doctor: data.data.doctor,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAILURE,
        error,
      });
    });
};
export const registerUser = ({
  name, email, username, password,
}) => dispatch => {
  dispatch({
    type: LOADING_REGISTER,
  });

  axios
    .post(`${url}/signup`, {
      name, email, username, password,
    })
    .then(data => {
      // Set the token in secure cookie.
      Cookies.set('auth_token', data.data.auth_token);
      Cookies.set('isLoggedIn', true);
      Cookies.set('user', JSON.stringify(data.data.user));

      dispatch({
        type: REGISTER,
        user: data.data.user,
      });
    })
    .catch(error => {
      dispatch({
        type: ERROR_REGISTER,
        error,
      });
    });
};
export const registerDoctor = data => dispatch => {
  dispatch({
    type: LOADING_REGISTER,
  });

  axios
    .post(`${url}/signup_doctor`, { ...data })
    .then(data => {
      // Set the token in secure cookie.
      saveInCookies(data.data);

      dispatch({
        type: REGISTER,
        user: data.data.user,
        doctor: data.data.doctor,
        userType: 'doctor',
      });
    })
    .catch(error => error.response);
};

export const logoutUser = (message = 'You have been logged out!') => {
  // remove user from cookie

  Cookies.remove('auth_token');
  Cookies.remove('user');
  Cookies.remove('isLoggedIn');
  Cookies.remove('userType');
  return {
    type: LOGOUT,
    message,
  };
};
export const getUser = () => {
  // Get the rocookie if any
  const token = Cookies.get('auth_token');
  const user = Cookies.get('user');
  if (!token || token === '' || !user) {
    return {
      type: NO_TOKEN,
      user: {},
    };
  }
  return {
    type: GET_USER,
    user: JSON.parse(Cookies.get('user')),
  };
};

export const serverDown = ()=>{
  return{
    type: SERVER_DOWN
  }
}

const saveInCookies = data => {
  Cookies.set('user', JSON.stringify(data.user));
  Cookies.set('auth_token', data.auth_token);
  Cookies.set('isLoggedIn', true);
  Cookies.set('userType', data.doctor ? 'doctor' : 'patient');
};
