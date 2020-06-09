import React from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

const Alert = ({ classname, message }) => (message && <span className={`alert ${classname}`}>{message}</span>);
Alert.defaultProps = {
  classname: '',
  message: '',
};

Alert.propTypes = {
  classname: PropTypes.string,
  message: PropTypes.string,
};
export default Alert;
