import React from "react";
const Doctor = ({ doctor, bookAppointment }) => {
  return (
    <li key={doctor.id} onClick={() => bookAppointment(doctor.id)}>
      <h2>{doctor.name}</h2>
  <p>Speciality: {doctor.speciality.name}</p>
  <p>Years of experience: {doctor.experience_year}</p>
  <p>City: {doctor.city}</p>
    </li>
  );
};

export default Doctor;
