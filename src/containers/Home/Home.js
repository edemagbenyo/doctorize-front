import React, { useEffect } from 'react';
import {
  Switch, Route, Link, useRouteMatch, Redirect,
} from 'react-router-dom';
import './Home.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Appointments from '../Appointments/Appointments';
import { logoutUser } from '../../store/actions/auth';
import HealthInformation from '../../components/HealthInformation/HeathInformation';
import {
  getHealthInformation,
  updateInformation,
} from '../../store/actions/heathinfo';
import BookAppointment from '../BookAppointment/BookAppointment';

const Home = ({
  isLoggedIn,
  user,
  logoutUser,
  getHealthInformation,
  healthinfo,
  updateInformation,
  flash,
  userType,
}) => {
  const { url, path } = useRouteMatch();
  useEffect(() => {
    getHealthInformation();
  }, [getHealthInformation]);
  if (isLoggedIn) {
    return (
      <div>
        <>
          <div>
            <div className="welcome">
              <h1>
                Welcome back,
                {user.name}
              </h1>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to={`${url}`}>Dasboard</Link>
                </li>
                <li>
                  <Link to={`${url}/appointments`}>Appointments</Link>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={e => {
                      e.preventDefault();
                      logoutUser();
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
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
  }
  return <Redirect to="/login" />;
};

Home.defaultProps = {
  isLoggedIn: false,
  user: {},
  logoutUser: () => undefined,
  getHealthInformation: () => undefined,
  healthinfo: {},
  updateInformation: () => undefined,
  flash: '',
  userType: 'patient',
};
Home.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  logoutUser: PropTypes.func,
  getHealthInformation: PropTypes.func,
  healthinfo: PropTypes.shape({
    name: PropTypes.string,
  }),
  updateInformation: PropTypes.func,
  flash: PropTypes.string,
  userType: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  getHealthInformation: () => dispatch(getHealthInformation()),
  updateInformation: data => dispatch(updateInformation(data)),
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
  healthinfo: state.healthinfo.healthinfo,
  flash: state.healthinfo.flash,
  userType: state.auth.userType,
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
