import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Account from '../../components/Account';
import './styles.scss';
import Doctor1 from '../../images/doctor1.png';

const Welcome = ({ isLoggedIn }) => (
  <div className="welcome-container">
    <div className="navbar">
      <div className="menu"><h3>!Doctorize</h3></div>
      <div className="search" />
      <div className="account">
        <Account isLoggedIn={isLoggedIn} />
      </div>
    </div>
    <div className="slider">
      <div className="slide"><img src={Doctor1} alt="Doctor" /></div>
      <div className="caption">
        <h1>Welcome to doctorize</h1>
        <h2>Medical appointment at your convinience.</h2>
        <h2>Talk to a medial specialist from the comfort of your home.</h2>
        <Link to="/home">Get Started</Link>
      </div>
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
