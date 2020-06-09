import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Doctor = ({ doctor }) => (
  <li key={doctor.id}>
    <Link to={{ pathname: `/home/book/${doctor.id}`, state: doctor }}>
      <h2>{doctor.name}</h2>
      {doctor.speciality && (
        <p>
          Speciality:
          {doctor.speciality.name}
        </p>
      )}
      <p>
        Years of experience:
        {doctor.experience_year}
      </p>
      <p>
        City:
        {doctor.city}
      </p>
    </Link>
  </li>
);


Doctor.defaultProps = {
  doctor: {},
};

Doctor.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    speciality: PropTypes.shape({
      name: PropTypes.string,
    }),
    name: PropTypes.string,
    city: PropTypes.string,
    experience_year: PropTypes.string,
  }),
};
export default Doctor;
