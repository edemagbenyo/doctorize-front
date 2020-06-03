import React from "react";
import { Link } from "react-router-dom";
const Doctor = ({ doctor }) => {

  return (
    <li key={doctor.id}>
      <Link to={{pathname:`/home/book/${doctor.id}`,state:doctor}}>
        <h2>{doctor.name}</h2>
        {doctor.speciality && <p>Speciality: {doctor.speciality.name}</p>}
        <p>Years of experience: {doctor.experience_year}</p>
        <p>City: {doctor.city}</p>
      </Link>
    </li>
  );
};

export default Doctor;
