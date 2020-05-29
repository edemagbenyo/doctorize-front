import React from "react";

const Speciality = ({speciality, getDoctors}) => {
  return (
    <li key={speciality.id} onClick={()=>getDoctors(speciality.id)}>
      <h2>{speciality.name}</h2>
      <p>{speciality.description}</p>
    </li>
  );
};
export default Speciality;
