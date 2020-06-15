import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { connect } from "react-redux";
import FlashMessage from "../../components/FlashMessage";

const FlashMessages = ({messages}) =>
  messages && 
    messages.map(message=><FlashMessage key={message.id} message={message}/>)
  ;
FlashMessages.defaultProps = {
  messages: "",
};

FlashMessages.propTypes = {
  messages: PropTypes.array,
};
const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages,
  };
};
export default connect(mapStateToProps, null)(FlashMessages);
