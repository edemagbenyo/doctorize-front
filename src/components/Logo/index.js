import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../images/logo.png';

const Logo = () => (
  <div className="logo">
    <img src={LogoImg} alt="logo" />
    <p><Link to="/">Doctorize</Link></p>
  </div>
);
export default Logo;
