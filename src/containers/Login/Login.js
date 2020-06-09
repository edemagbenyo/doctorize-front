import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../Register/Register.scss';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../../store/actions/auth';
import Alert from '../../components/Alert/Alert';

const Login = ({ loginUser, isLoggedIn, isLoading, errMessage }) => {
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
        <Alert classname="error" message={errMessage}/>
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
        <button type="submit"> {isLoading ? 'loading...' :'Login'}</button>
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
  isLoading: false,
  errMessage: ''
};

Login.propTypes = {
  loginUser: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
  errMessage: PropTypes.string,

};

const maptStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  errMessage: state.auth.errMessage
});
const mapDipatchToProps = dispatch => ({
  loginUser: data => {
    dispatch(loginUser(data));
  },
});

export default connect(maptStateToProps, mapDipatchToProps)(Login);
