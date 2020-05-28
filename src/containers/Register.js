import React from "react";
import { connect } from "react-redux";
import '../styles/tablets/register.scss'
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
      <form>
        <h1>Create an account</h1>
        <label htmlFor="name">
          <input id="name" type="text" placeholder="Name" />
        </label>
        <label htmlFor="username">
          <input id="username" type="text" placeholder="Username" />
        </label>
        <label htmlFor="password">
          <input id="password" type="password" placeholder="password" />
        </label>
        <button>Register</button>
        <p>Already have an account? <Link to="login">Login</Link></p>
      </form>
    </div>
  );
};

export default connect(null, null)(Register);
