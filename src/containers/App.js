import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from '../router/index';
import Navbar from '../components/Navbar';
import '../styles/tablets/main.scss';
import { getUser } from '../store/actions/auth';

function App({ getUser, user }) {
  const { pathname } = useLocation();
  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div className="main-container">
      <div
        className={pathname === '/' ? '' : 'main-navbar'}
        style={pathname === '/' ? { display: 'none' } : { display: '' }}
      >
        <Navbar user={user} />
      </div>
      <div
        style={pathname === '/' ? { width: '100%' } : { width: '' }}
        className="main-content"
      >
        {Routes}
      </div>
    </div>
  );
}

App.defaultProps = {
  getUser: () => undefined,
  user: {},
};
App.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

const mapDispatchTopProps = dispatch => ({ getUser: () => dispatch(getUser()) });
const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, mapDispatchTopProps)(App);
