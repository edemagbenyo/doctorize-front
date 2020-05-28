import React from "react";
import { connect } from "react-redux";
import '../styles/tablets/register.scss'
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className="register-container">
      <form>
        <h1>Log in account</h1>
        <label htmlFor="username">
          <input id="username" type="text" placeholder="Username" />
        </label>
        <label htmlFor="password">
          <input id="password" type="password" placeholder="password" />
        </label>
        <button>Login</button>
        <p>Don't have an account? <Link to="register">Register</Link></p>
      </form>
    </div>
  );
};

export default connect(null, null)(Login);
