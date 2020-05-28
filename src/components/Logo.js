import React from "react";
import LogoImg from '../images/logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoImg} alt="logo"/>
      <p>Doctorize</p>
    </div>
  );
};
export default Logo;
