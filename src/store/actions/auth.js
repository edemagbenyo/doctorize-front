import { LOADING_LOGIN, ERROR_LOGIN,LOGIN, GET_USER, NO_TOKEN, LOGOUT, LOADING_REGISTER, REGISTER, ERROR_REGISTER} from "../actionTypes";
import { url } from "../../config";
import axios from "axios";
import Cookies from 'js-cookie';
export const loginUser = ({ username, password }) => (dispatch) => {
  dispatch({
    type: LOADING_LOGIN,
  });

  axios
    .post(`${url}/auth/login`, { username, password })
    .then((data) => {
      //Set the token in secure cookie.
      localStorage.setItem('auth_token', data.data.auth_token)
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(data.data.user));

      dispatch({
        type:LOGIN,
        user:data.data.user
      })
    })
    .catch((error) => {
      dispatch({
        type: ERROR_LOGIN,
        error,
      });
    });
};
export const registerUser = ({ name, email, username, password }) => (dispatch) => {
  dispatch({
    type: LOADING_REGISTER,
  });

  axios
    .post(`${url}/signup`, { name, email, username, password })
    .then((data) => {
      //Set the token in secure cookie.
      localStorage.setItem('auth_token', data.data.auth_token)
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(data.data.user));

      dispatch({
        type:REGISTER,
        user: data.data.user
      })
    })
    .catch((error) => {
      dispatch({
        type: ERROR_REGISTER,
        error,
      });
    });
};

export const logoutUser = (message='You have been logged out!')=>{
  //remove user from cookie
  
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
  return{
    type:LOGOUT, message
  }
}
export const getUser = ()=>{
  //Get the rocookie if any
  const token = localStorage.getItem('auth_token');
  const user = localStorage.getItem('user');
  if(!token || token==='' || !user){
    return {
      type:NO_TOKEN,
      user:{}
    }
  }else{
    return {
      type:GET_USER,
      user:JSON.parse(localStorage.getItem('user'))
    }
  }
}

