import {} from "../actionTypes";
import axios from "axios";
import { url } from "../../config";

const token = localStorage.getItem("auth_token");

export const bookAppointment = (data) => (dispatch) => {
  //TODO : Book appointnemtn
  console.log(data);
  // axios.post(`${url}/appointment`, {}, { headers: { Authorization: token } });
};
