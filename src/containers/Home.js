import React, { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch, Redirect } from "react-router-dom";
import "../styles/tablets/home.scss";
import Appointments from "./Appointments";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/auth";
import HealthInformation from "../components/HeathInformation";
import {
  getHealthInformation,
  updateInformation,
} from "../store/actions/heathinfo";
import BookAppointment from "./BookAppointment";

const Home = ({
  isLoggedIn,
  user,
  logoutUser,
  getHealthInformation,
  healthinfo,
  updateInformation,
  flash,
}) => {
  const { url, path } = useRouteMatch();
  useEffect(() => {
    getHealthInformation();
  }, [getHealthInformation]);
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
                      logoutUser();
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
            <Route path={`${path}/book/:doctorid`}>
              <BookAppointment />
            </Route>
            <Route path={`${path}`}>
              <HealthInformation
                information={healthinfo}
                updateInformation={updateInformation}
                flash={flash}
              />
            </Route>
           
          </Switch>
        </>
      </div>
    );
  return <Redirect to="/login" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getHealthInformation: () => dispatch(getHealthInformation()),
    updateInformation: (data) => dispatch(updateInformation(data)),
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    healthinfo: state.healthinfo.healthinfo,
    flash: state.healthinfo.flash,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
