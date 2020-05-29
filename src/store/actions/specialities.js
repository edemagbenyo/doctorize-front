import {  LOADING_SPECIALITIES, GET_SPECIALITIES } from "../actionTypes"
import Axios from "axios";



export const getSpecialities = ()=>dispatch=>{
  dispatch({
    type:LOADING_SPECIALITIES
  });

  Axios.get(`${url}/specialities`)
  .then(data=>{
    console.log("specialities",data);
    dispatch({
      type:GET_SPECIALITIES
    })
  })
}