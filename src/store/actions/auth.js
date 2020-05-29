import { LOADING_LOGIN, ERROR_LOGIN,LOGIN, GET_USER, NO_TOKEN, LOGOUT, LOADING_REGISTER, REGISTER, ERROR_REGISTER } from "../actionTypes";
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
      Cookies.set('auth_token', data.data.auth_token)
      console.log(data.data);
      dispatch({
        type:LOGIN,
        user:data.data.user
      })
    })
    .catch((error) => {
      console.log(error);
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
      Cookies.set('auth_token', data.data.auth_token)
      console.log(data);
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

export const logoutUser = ()=>{
  console.log("logging out........");
  //remove user from cookie
  Cookies.remove('auth_token');
  return{
    type:LOGOUT
  }
}
export const getUser = ()=>dispatch=>{
  //Get the rocookie if any
  const token = Cookies.get('auth_token');
  console.log(token);
  if(!token || token===''){
    return {
      type:NO_TOKEN,
      user:{}
    }
  }else{
    axios.get(`${url}/user`,{
      headers: {'Authorization': token}
    })
    .then(data=>{
      console.log(data.data);
      dispatch({
        type:GET_USER,
        user:data.data
      })
    })
  }
}