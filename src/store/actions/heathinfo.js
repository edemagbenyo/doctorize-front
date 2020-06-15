import axios from 'axios';
import Cookies from 'js-cookie';
import {
  LOADING_HEALTHINFO,
  GET_HEALTHINFO,
  UPDATE_HEALTHINFO,
} from '../actionTypes';
import { url } from '../../config';
import { logoutUser, serverDown } from './auth';
import { addFlashMessage } from './flashMessages';

export const getHealthInformation = () => dispatch => {
  const token = Cookies.get('auth_token');
  dispatch({
    type: LOADING_HEALTHINFO,
  });
  axios
    .get(`${url}/healthinfos`, {
      headers: { Authorization: token },
    })
    .then(data => {
      dispatch({
        type: GET_HEALTHINFO,
        healthinfo: data.data[0],
      });
    })
    .catch(err => {
      if (err.response && err.response.status === 422) {
        logoutUser(err.response.data.message);
      } else {
        serverDown();
      }
    });
};

export const updateInformation = data => dispatch => {
  dispatch({
    type: LOADING_HEALTHINFO,
  });
  const token = Cookies.get('auth_token');
  if (Object.keys(data.old).length === 0) {
    // post
    axios
      .post(
        `${url}/healthinfos/`,
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
      .then(_ => {
        addFlashMessage({
          type:'success',
          text:'Health information update!'
        })
        dispatch({
          type: UPDATE_HEALTHINFO,
        });
      })
      .catch(err => err);
  } else {
    // update
    axios
      .put(
        `${url}/healthinfos/${data.old.id}`,
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
      .then(_ => {
        dispatch(addFlashMessage({
          type:'success',
          text:'Health information update!'
        }))
        dispatch({
          type: UPDATE_HEALTHINFO,
        });
      })
      .catch(err => {
        if (err.response.status === 422) {
          logoutUser(err.response.data.message);
        }
      });
  }
};
