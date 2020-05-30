import React from "react";
import LogoImg from '../images/logo.png';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoImg} alt="logo"/>
      <p><Link to="/">Doctorize</Link></p>
    </div>
  );
};
export default Logo;
