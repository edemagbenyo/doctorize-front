import React from 'react';
import Account from '../components/Account';
import '../styles/tablets/welcome.scss'
import Doctor1 from '../images/doctor1.png';
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="navbar">
        <div className="menu">Menu</div>
        <div className="search">Search</div>
        <div className="account">
          <Account/>
        </div>
      </div>
      <div className="slider">
        <div className="caption">
        <h1>Welcome to doctorize</h1>
        <Link to="/">Get Started</Link>
        </div>
        <div className="slide"><img src={Doctor1} alt="Doctor"/></div>
      </div>

    </div>
  );
};
export default  Welcome;