import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
const Navbar = () => {
  return (
    <>
      <Logo/>
      <div className="links">
        <ul>
          <li>
            <Link to="/specialities">Specialities</Link>
            </li>
            <li>
            <Link to="doctors">Our doctors</Link>
            </li>
            <li>
            <Link to="test">Self-Test(Covid)</Link>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="/">
              <img src={Facebook} alt="facebook"/>
            </a>
            
          </li>
          <li>
          <a href="/">
              <img src={Twitter} alt="twitter"/>
            </a>
          </li>
        </ul>
        <p>&copy; 2020 Doctorize inc.</p>
      </div>
      
    </>
  );
};

export default Navbar;
