import React from "react";
import {useHistory} from 'react-router-dom';

const Speciality = ({speciality, getDoctors}) => {
  const history = useHistory()
  return (
    <li key={speciality.id} onClick={()=>history.push(`specialities/${speciality.id}/doctors`)}>
      <h2>{speciality.name}</h2>
      <p>{speciality.description}</p>
    </li>
  );
};
export default Speciality;
