import React from 'react';
import { Link } from "react-router-dom"

const Navbar = ()=>{
  return <div>
    <ul>
      <li>
        <Link to="/specialities">Specialities</Link>
        <Link to="doctors">Our doctors</Link>
        <Link to="test">Self-Test(Covid)</Link>
      </li>
    </ul>
  </div>
}

export default Navbar;