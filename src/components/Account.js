import React from 'react';
import {Link} from 'react-router-dom';

const Account = ({isLoggedIn})=>{
  if (!isLoggedIn) return (<div>
    <ul>
      <li> <Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>)
  return (<div><Link to="home"/>My Account</div>)
}

Account.defaultProps={
  isLoggedIn:false
}

export default Account;