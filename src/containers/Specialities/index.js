import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSpecialities } from '../../store/actions/specialities';
import Loading from '../../components/Loading';
import './styles.scss';
import Speciality from '../../components/Speciality';

const Specialities = ({ specialities, getSpecialities, isLoading }) => {
  useEffect(() => {
    getSpecialities();
  }, [getSpecialities]);
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>Specialities</h1>
      <span className="info">Select any speciality to get doctors</span>
      {specialities && specialities.length > 0 ? (
        <ul className="specialities">
          {specialities.map(speciality => (
            <Speciality key={speciality.id} speciality={speciality} />
          ))}
        </ul>
      ) : (
        <h5>No speciality</h5>
      )}
    </div>
  );
};

Specialities.defaultProps = {
  specialities: [],
  getSpecialities: () => undefined,
  isLoading: false,
};
Specialities.propTypes = {
  specialities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  getSpecialities: PropTypes.func,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  specialities: state.specialities.specialities,
  isLoading: state.specialities.isLoading,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  getSpecialities: () => dispatch(getSpecialities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Specialities);
