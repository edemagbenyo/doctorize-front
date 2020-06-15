import React from "react";
import PropTypes from "prop-types";
// import "./styles.scss";

const FlashMessage = ({type, text}) => {
  return <span className={`flash ${type}`} >{text}</span>
}

FlashMessage.defaultProps = {
  messages: "",
};

FlashMessage.propTypes = {
  message: PropTypes.string,
};

export default FlashMessage;
