import {BOOK_APPOINTMENT, GET_APPOINTMENTS} from "../actionTypes";
import axios from "axios";
import { url } from "../../config";
import moment from 'moment';
import Cookies from 'js-cookie';

export const bookAppointment = (data) => (dispatch) => {
  const token = Cookies.get("auth_token");
  
  const moment_date = moment(data.date);
  axios
    .post(
      `${url}/appointments`,
      { ...data, date:moment_date.format("YYYY-MM-DD"), time: moment_date.format("HH:mm:ss")},
      { headers: { Authorization: token } }
    )
    .then(({data})=>{
      dispatch({
        type:BOOK_APPOINTMENT
      })
    }).catch(
      err=>console.log(err.response)
    );
};
export const getAppointments = () => (dispatch) => {
  const token = Cookies.get("auth_token");

  axios
    .get(
      `${url}/appointments`,
      { headers: { Authorization: token } }
    )
    .then(({data})=>{
      console.log(data);
      dispatch({
        type:GET_APPOINTMENTS,
        appointments:data
      })
    }).catch(
      err=>console.log(err.response)
    );
};
