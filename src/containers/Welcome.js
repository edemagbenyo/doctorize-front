import React from 'react';
import Account from '../components/Account';
import '../styles/tablets/welcome.scss'
import Doctor1 from '../images/doctor1.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Welcome = ({isLoggedIn}) => {
  console.log(isLoggedIn);
  return (
    <div className="welcome-container">
      <div className="navbar">
        <div className="menu">Menu</div>
        <div className="search">Search</div>
        <div className="account">
          <Account isLoggedIn={isLoggedIn}/>
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

const mapStateToProps = (state)=>{
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps,null)(Welcome);