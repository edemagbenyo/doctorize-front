import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Facebook from '../../images/facebook.png';
import Twitter from '../../images/twitter.png';

const Navbar = ({ user }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Logo />
      <div className="links">
        <ul>
          <li className={pathname.endsWith('specialities') ? 'active' : ''}>
            <NavLink to="/specialities">Specialities</NavLink>
          </li>
          <li className={pathname.endsWith('doctors') ? 'active' : ''}>
            <NavLink to="/doctors">Our doctors</NavLink>
          </li>
          {/* <li className={pathname.includes('doctors') ? 'active' :''}>
            <NavLink to="test">Self-Test(Covid)</NavLink>
          </li> */}
          {user && Object.keys(user).length > 0 && (
            <li className={pathname.includes('home') ? 'active' : ''}>
              <NavLink to="/home">Dashboard</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="/">
              <img src={Facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
        </ul>
        <p>&copy; 2020 Doctorize inc.</p>
      </div>
    </>
  );
};
Navbar.defaultProps = {
  user: {},
};
Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};
export default Navbar;
