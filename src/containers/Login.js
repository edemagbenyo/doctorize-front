import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/tablets/register.scss";
import { Link } from "react-router-dom";
import { loginUser } from "../store/actions/auth";
import PropTypes from "prop-types";
const Login = ({ loginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="register-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser({ username, password });
        }}
      >
        <h1>Log in account</h1>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>Login</button>
        <p>
          Don't have an account? <Link to="register">Register</Link>
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func,
};

const mapDipatchToProps = (dispatch) => {
  return {
    loginUser: (data) => {
      dispatch(loginUser(data));
    },
  };
};

export default connect(null, mapDipatchToProps)(Login);
