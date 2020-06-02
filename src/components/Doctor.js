import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
const Doctor = ({ doctor, bookAppointment }) => {

  return (
    <li key={doctor.id}>
      <Link to={`/home/book/${doctor.id}`}>
        <h2>{doctor.name}</h2>
        {doctor.speciality && <p>Speciality: {doctor.speciality.name}</p>}
        <p>Years of experience: {doctor.experience_year}</p>
        <p>City: {doctor.city}</p>
      </Link>
    </li>
  );
};

export default Doctor;
