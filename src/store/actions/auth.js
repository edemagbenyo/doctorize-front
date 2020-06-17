import axios from 'axios';
import Cookies from 'js-cookie';
import {
  LOGIN_FAILURE,
  GET_USER,
  NO_TOKEN,
  LOGOUT,
  SERVER_DOWN,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actionTypes';
import { url } from '../../config';
import { addFlashMessage } from './flashMessages';

export const loginUser = ({ username, password }) => dispatch => {
  dispatch({
    type: LOGIN_LOADING,
  });

  axios
    .post(`${url}/auth/login`, { username, password })
    .then(data => {
      // Set the token in secure cookie.

      if (data.data) {
        saveInCookies(data.data);
        dispatch(
          addFlashMessage({
            type: 'success',
            text: 'You have successfully logged in!',
          }),
        );
        dispatch({
          type: LOGIN_SUCCESS,
          user: data.data.user,
          userType: data.data.doctor ? 'doctor' : 'patient',
          doctor: data.data.doctor,
        });
      }
    })
    .catch(error => {
      dispatch(
        addFlashMessage({
          type: 'error',
          text: error.response.data.message,
        }),
      );
      dispatch({
        type: LOGIN_FAILURE,
      });
    });
};
export const registerUser = ({
  name, email, username, password,
}) => dispatch => {
  dispatch({
    type: REGISTER_LOADING,
  });

  axios
    .post(`${url}/signup`, {
      name,
      email,
      username,
      password,
    })
    .then(data => {
      // Set the token in secure cookie.
      Cookies.set('auth_token', data.data.auth_token);
      Cookies.set('isLoggedIn', true);
      Cookies.set('user', JSON.stringify(data.data.user));

      dispatch(
        addFlashMessage({
          type: 'success',
          text: 'You have successfully registered!',
        }),
      );
      dispatch({
        type: REGISTER_SUCCESS,
        user: data.data.user,
      });
    })
    .catch(error => {
      dispatch(
        addFlashMessage({
          type: 'error',
          text: error.response.data.message,
        }),
      );
      dispatch({
        type: REGISTER_FAILURE,
        message: error.response.data.message,
      });
    });
};
export const registerDoctor = data => dispatch => {
  dispatch({
    type: REGISTER_LOADING,
  });

  axios
    .post(`${url}/signup_doctor`, { ...data })
    .then(data => {
      // Set the token in secure cookie.
      saveInCookies(data.data);
      dispatch(
        addFlashMessage({
          type: 'success',
          text: 'You have successfully registered!',
        }),
      );
      dispatch({
        type: REGISTER_SUCCESS,
        user: data.data.user,
        doctor: data.data.doctor,
        userType: 'doctor',
      });
    })
    .catch(error => {
      dispatch(
        addFlashMessage({
          type: 'error',
          text: error.response.data.message,
        }),
      );
      dispatch({
        type: REGISTER_FAILURE,
        message: error.response.data.message,
      });
    });
};

export const logoutUser = (message = 'You have been logged out!') => dispatch => {
  // remove user from cookie

  Cookies.remove('auth_token');
  Cookies.remove('user');
  Cookies.remove('isLoggedIn');
  Cookies.remove('userType');
  dispatch(
    addFlashMessage({
      type: 'success',
      text: 'You have successfully logged out!',
    }),
  );
  dispatch({
    type: LOGOUT,
    message,
  });
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

export const serverDown = () => ({
  type: SERVER_DOWN,
});

const saveInCookies = data => {
  Cookies.set('user', JSON.stringify(data.user));
  Cookies.set('auth_token', data.auth_token);
  Cookies.set('isLoggedIn', true);
  Cookies.set('userType', data.doctor ? 'doctor' : 'patient');
};
