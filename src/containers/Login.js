import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/tablets/register.scss';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../store/actions/auth';

const Login = ({ loginUser, isLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  if (isLoggedIn) return <Redirect to="home" />;
  return (
    <div className="register-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          loginUser({ username, password });
        }}
      >
        <h1>Log in account</h1>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Login</button>
        <p>
          Don &apos; t have an account?
          <Link to="register">Register</Link>
        </p>
      </form>
    </div>
  );
};

Login.defaultProps = {
  loginUser: () => undefined,
  isLoggedIn: false,
};

Login.propTypes = {
  loginUser: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

const maptStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});
const mapDipatchToProps = dispatch => ({
  loginUser: data => {
    dispatch(loginUser(data));
  },
});

export default connect(maptStateToProps, mapDipatchToProps)(Login);
