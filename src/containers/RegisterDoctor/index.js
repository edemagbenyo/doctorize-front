import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerDoctor } from '../../store/actions/auth';
import { getSpecialities } from '../../store/actions/specialities';
import '../Register/styles.scss';

const RegisterDoctor = ({
  isLoggedIn,
  registerDoctor,
  specialities,
  getSpecialities,
  isLoading,
}) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    getSpecialities();
  }, [getSpecialities]);

  if (isLoggedIn) return <Redirect to="home" />;
  return (
    <div className="register-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          registerDoctor(form);
        }}
      >
        <h1>Create an account</h1>
        <h2>Personal Information</h2>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            onChange={e => setForm({ ...form, name: e.target.value })}
            value={form.name}
            placeholder="Name"
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            onChange={e => setForm({ ...form, email: e.target.value })}
            value={form.email}
            placeholder="Email"
          />
        </label>
        <h2>Professional Information</h2>
        <label htmlFor="experience_year">
          <input
            id="experience_year"
            type="experience_year"
            onChange={e => setForm({ ...form, experience_year: e.target.value })}
            value={form.experience_year}
            placeholder="Experience year"
          />
        </label>
        <label htmlFor="hospital">
          <input
            id="hospital"
            type="hospital"
            onChange={e => setForm({ ...form, hospital: e.target.value })}
            value={form.hospital}
            placeholder="Hospital"
          />
        </label>
        <label htmlFor="speciality">
          <select
            onChange={e => setForm({ ...form, speciality: e.target.value })}
          >
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
            onChange={e => setForm({ ...form, city: e.target.value })}
            value={form.city}
            placeholder="City"
          />
        </label>

        <h2>Login Information</h2>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            onChange={e => setForm({ ...form, username: e.target.value })}
            value={form.username}
            placeholder="Username"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            onChange={e => setForm({ ...form, password: e.target.value })}
            value={form.password}
            placeholder="password"
          />
        </label>
        <button type="submit">{isLoading ? 'Loading...' : 'Register'}</button>
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
  isLoading: false,
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
  isLoading: PropTypes.bool,
};
const maptStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  specialities: state.specialities.specialities,
});
const mapDipatchToProps = {
  registerDoctor,
  getSpecialities,
};

export default connect(maptStateToProps, mapDipatchToProps)(RegisterDoctor);
