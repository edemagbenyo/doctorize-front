import {
  LOADING_HEALTHINFO,
  GET_HEALTHINFO,
  UPDATE_HEALTHINFO,
} from "../actionTypes";
import { url } from "../../config";
import Cookies from "js-cookie";
import axios from "axios";
import { logoutUser } from "./auth";

const token = localStorage.getItem("auth_token");
export const getHealthInformation = () => (dispatch) => {
  dispatch({
    type: LOADING_HEALTHINFO,
  });
  axios
    .get(`${url}/users/healthinfos`, {
      headers: { Authorization: token },
    })
    .then((data) => {
      console.log(data);
      dispatch({
        type: GET_HEALTHINFO,
        healthinfo: data.data[0],
      });
    })
    .catch((err) => {
      if (err.response.status == 422) {
        logoutUser(err.response.data.message);
      }
    });
};

export const updateInformation = (data) => (dispatch) => {
  console.log(`Information to update`, data);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(token);
  if (!data.old) {
    //post
    axios
      .post(
        `${url}/users/healthinfos/`,
        {
          age: data.age,
          gender: data.gender,
          weight: data.weight,
          height: data.height,
          personal: data.personal,
          family: data.family,
        },
        { headers: { Authorization: token } }
      )
      .then((data) => {
        dispatch({
          type: UPDATE_HEALTHINFO,
          flash: "Health information has been saved!",
        });
      });
  } else {
    //update
    axios
      .put(
        `${url}/users/healthinfos/${data.old.id}`,
        {
          age: data.age,
          gender: data.gender,
          weight: data.weight,
          height: data.height,
          personal: data.personal,
          family: data.family,
        },
        { headers: { Authorization: token } }
      )
      .then((data) => {
        dispatch({
          type: UPDATE_HEALTHINFO,
          flash: "Health information has been updated!",
        });
      })
      .catch((err) => {
        if (err.response.status == 422) {
          logoutUser(err.response.data.message);
        }
      });
  }
};
