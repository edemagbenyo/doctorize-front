import { LOADING_HEALTHINFO, GET_HEALTHINFO } from "../actionTypes";
import { url } from "../../config";
import Cookies from 'js-cookie';
import axios from 'axios';
export const getHealthInformation = () =>dispatch=>{

  dispatch({
    type:LOADING_HEALTHINFO
  })
  const user = JSON.parse(Cookies.get('user'));
  const token = Cookies.get('auth_token')
  console.log(token);
  axios.get(`${url}/users/${user.id}/healthinfos`,{
    headers:{'Authorization':token}
  })
  .then(data=>{
    console.log(data);
    dispatch({
      type:GET_HEALTHINFO,
      healthinfo:data.data
    })
  })

}