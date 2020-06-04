import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Account = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <div>
        <ul>
          <li>
            {' '}
            <Link to="/register">Register</Link>
          </li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <Link to="home" />
      My Account
    </div>
  );
};

Account.defaultProps = {
  isLoggedIn: false,
};

Account.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Account;
