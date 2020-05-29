import React from "react";
import { Switch, Route, Link, useRouteMatch, Redirect } from "react-router-dom";
import "../styles/tablets/home.scss";
import Appointments from "./Appointments";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/auth";

const Home = ({ isLoggedIn, user, logoutUser }) => {
  const { url, path } = useRouteMatch();
  if (isLoggedIn)
    return (
      <div>
        <>
          <div>
            <div className="menu">
              <ul>
                <li>
                  <Link to={`${url}`}>Dasboard</Link>
                </li>
                <li>
                  <Link to={`${url}/appointments`}>Appointments</Link>
                </li>
                <li>
                  <Link to={`${url}/favourites`}>Favourites</Link>
                </li>

                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      logoutUser()
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div className="welcome">
              <h1>Welcome back, {user.name}</h1>
            </div>
          </div>
          <Switch>
            <Route path={`${path}/appointments`}>
              <Appointments />
            </Route>
          </Switch>
        </>
      </div>
    );
  return <Redirect to="/login" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser:()=> dispatch(logoutUser()),
  };
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
