import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../../store/actions/auth';
import './styles.scss';

const Register = ({ isLoggedIn, registerUser, isLoading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (isLoggedIn) return <Redirect to="home" />;

  return (
    <div className="register-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          registerUser({
            name,
            email,
            username,
            password,
          });
        }}
      >
        <h1>Create an account</h1>
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
        <button type="submit">{isLoading ? 'Loading...' : 'Register'}</button>
        <p>
          Already have an account?
          <Link to="login">Login</Link>
        </p>
        <p>
          Are you a doctor?
          <Link to="registerdoc">Register as doctor</Link>
        </p>
      </form>
    </div>
  );
};
Register.defaultProps = {
  isLoggedIn: false,
  registerUser: () => undefined,
  isLoading: false,
};
Register.propTypes = {
  isLoggedIn: PropTypes.bool,
  registerUser: PropTypes.func,
  isLoading: PropTypes.bool,
};

const maptStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
});
const mapDipatchToProps = dispatch => ({
  registerUser: data => {
    dispatch(registerUser(data));
  },
});

export default connect(maptStateToProps, mapDipatchToProps)(Register);
