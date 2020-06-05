import axios from 'axios';
import Cookies from 'js-cookie';
import {
  LOADING_HEALTHINFO,
  GET_HEALTHINFO,
  UPDATE_HEALTHINFO,
} from '../actionTypes';
import { url } from '../../config';
import { logoutUser } from './auth';

export const getHealthInformation = () => dispatch => {
  const token = Cookies.get('auth_token');
  dispatch({
    type: LOADING_HEALTHINFO,
  });
  axios
    .get(`${url}/users/healthinfos`, {
      headers: { Authorization: token },
    })
    .then(data => {
      dispatch({
        type: GET_HEALTHINFO,
        healthinfo: data.data[0],
      });
    })
    .catch(err => {
      if (err.response.status === 422) {
        logoutUser(err.response.data.message);
      }
    });
};

export const updateInformation = data => dispatch => {
  const token = Cookies.get('auth_token');
  if (Object.keys(data.old).length === 0) {
    // post
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
        { headers: { Authorization: token } },
      )
      .then(data => {
        dispatch({
          type: UPDATE_HEALTHINFO,
          flash: 'Health information has been saved!',
        });
      })
      .catch(err => err);
  } else {
    // update
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
        { headers: { Authorization: token } },
      )
      .then(data => {
        dispatch({
          type: UPDATE_HEALTHINFO,
          flash: 'Health information has been updated!',
        });
      })
      .catch(err => {
        if (err.response.status === 422) {
          logoutUser(err.response.data.message);
        }
      });
  }
};
