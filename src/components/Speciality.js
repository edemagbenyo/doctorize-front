import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Speciality = ({ speciality }) => {
  const history = useHistory();
  return (
    <li key={speciality.id}>
      <h2>{speciality.name}</h2>
      <p>{speciality.description}</p>
      <button type="button" onClick={() => history.push(`specialities/${speciality.id}/doctors`)}>Book Doctor</button>
    </li>
  );
};

Speciality.defaultProps = {
  speciality: {},
};
Speciality.propTypes = {
  speciality: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};
export default Speciality;
