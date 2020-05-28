import { LOADING_LOGIN, ERROR_LOGIN } from "../actionTypes";
import { url } from "../../config";
import axios from "axios";
export const loginUser = ({ username, password }) => (dispatch) => {
  dispatch({
    type: LOADING_LOGIN,
  });

  axios
    .post(`${url}/auth/login`, { username, password })
    .then((data) => {
      //Set the token in secure cookie.
      console.log(data);
      // dispatch({
      //   type:LOGIN,
      //   user:data
      // })
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ERROR_LOGIN,
        error,
      });
    });
};
