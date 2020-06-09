import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Account from '../../components/Account/Account';
import './Welcome.scss';
import Doctor1 from '../../images/doctor1.png';

const Welcome = ({ isLoggedIn }) => (
  <div className="welcome-container">
    <div className="navbar">
      <div className="menu">Menu</div>
      <div className="search">Search</div>
      <div className="account">
        <Account isLoggedIn={isLoggedIn} />
      </div>
    </div>
    <div className="slider">
      <div className="caption">
        <h1>Welcome to doctorize</h1>
        <Link to="/">Get Started</Link>
      </div>
      <div className="slide"><img src={Doctor1} alt="Doctor" /></div>
    </div>

  </div>
);

Welcome.defaultProps = {
  isLoggedIn: false,
};
Welcome.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, null)(Welcome);
