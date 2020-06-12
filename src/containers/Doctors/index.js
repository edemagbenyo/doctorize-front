import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getDoctors,
  getDoctorsBySpeciality,
} from '../../store/actions/doctors';
import './styles.scss';
import Doctor from '../../components/Doctor';
import Loading from '../../components/Loading';

const Doctors = ({
  doctors,
  getDoctors,
  isLoading,
  getDoctorsBySpeciality,
  speciality,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDoctorsBySpeciality(id);
    } else {
      getDoctors();
    }
  }, [getDoctors, id, getDoctorsBySpeciality]);
  // if (!isLoggedIn) return <Redirect to="/login" />;
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>Doctors</h1>
      {speciality && <h2>{speciality.name}</h2>}
      <span className="info">Select any doctor to book an appointment</span>
      {doctors && doctors.length > 0 ? (
        <ul className="doctors">
          {doctors.map(doctor => (
            <Doctor key={doctor.id} doctor={doctor} />
          ))}
        </ul>
      ) : (
        <h5>No Doctor</h5>
      )}
    </div>
  );
};

Doctors.defaultProps = {
  doctors: [],
  getDoctors: () => undefined,
  isLoading: false,
  getDoctorsBySpeciality: () => undefined,
  speciality: {},
};
Doctors.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  getDoctors: PropTypes.func,
  isLoading: PropTypes.bool,
  getDoctorsBySpeciality: PropTypes.func,
  speciality: PropTypes.shape({
    name: PropTypes.string,
  }),
};
const mapStateToProps = state => ({
  doctors: state.doctors.doctors,
  isLoading: state.doctors.isLoading,
  speciality: state.doctors.speciality,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  getDoctors,
  getDoctorsBySpeciality,
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
