import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../Register/Register.scss';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerDoctor } from '../../store/actions/auth';
import { getSpecialities } from '../../store/actions/specialities';

const RegisterDoctor = ({
  isLoggedIn,
  registerDoctor,
  specialities,
  getSpecialities,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience_year, setExperienceYear] = useState('');
  const [hospital, setHospital] = useState('');
  const [city, setCity] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    getSpecialities();
  }, [getSpecialities]);

  if (isLoggedIn) return <Redirect to="home" />;
  return (
    <div className="register-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          registerDoctor({
            name,
            email,
            experience_year,
            hospital,
            speciality,
            username,
            password,
            city,
          });
        }}
      >
        <h1>Create an account</h1>
        <h2>Personal Information</h2>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Name"
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </label>
        <h2>Professional Information</h2>
        <label htmlFor="experience_year">
          <input
            id="experience_year"
            type="experience_year"
            onChange={e => setExperienceYear(e.target.value)}
            value={experience_year}
            placeholder="Experience year"
          />
        </label>
        <label htmlFor="hospital">
          <input
            id="hospital"
            type="hospital"
            onChange={e => setHospital(e.target.value)}
            value={hospital}
            placeholder="Hospital"
          />
        </label>
        <label htmlFor="speciality">
          <select onChange={e => setSpeciality(e.target.value)}>
            <option value="">Select speciality</option>
            {specialities && specialities.length > 0 ? (
              specialities.map(sp => (
                <option key={sp.id} value={sp.id}>
                  {sp.name}
                </option>
              ))
            ) : (
              <option>No Speciality</option>
            )}
          </select>
        </label>
        <label htmlFor="city">
          <input
            id="city"
            type="city"
            onChange={e => setCity(e.target.value)}
            value={city}
            placeholder="City"
          />
        </label>

        <h2>Login Information</h2>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="password"
          />
        </label>
        <button type="submit">Register</button>
        <p>
          Already have an account?
          <Link to="login">Login</Link>
        </p>
        <p>
          Not a doctor?
          <Link to="register">Register as patient</Link>
        </p>
      </form>
    </div>
  );
};
RegisterDoctor.defaultProps = {
  isLoggedIn: false,
  specialities: [],
  getSpecialities: () => undefined,
  registerDoctor: () => undefined,
};
RegisterDoctor.propTypes = {
  isLoggedIn: PropTypes.bool,
  specialities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  getSpecialities: PropTypes.func,
  registerDoctor: PropTypes.func,
};
const maptStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  specialities: state.specialities.specialities,
});
const mapDipatchToProps = dispatch => ({
  registerDoctor: data => {
    dispatch(registerDoctor(data));
  },
  getSpecialities: () => dispatch(getSpecialities()),
});

export default connect(maptStateToProps, mapDipatchToProps)(RegisterDoctor);
