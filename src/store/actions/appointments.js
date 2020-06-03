import {BOOK_APPOINTMENT, GET_APPOINTMENTS} from "../actionTypes";
import axios from "axios";
import { url } from "../../config";
import moment from 'moment';

const token = localStorage.getItem("auth_token");

export const bookAppointment = (data) => (dispatch) => {
  
  const moment_date = moment(data.date);
  console.log(data);
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
  console.log(token);
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
