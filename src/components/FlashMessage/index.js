import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const FlashMessage = ({ message, onRemoveFlash }) => {
  const rv = () => {
    onRemoveFlash(message.id);
  };
  useEffect(() => {
    setTimeout(() => {
      //Remove
      rv()
    }, 2000);
  });
  return (
    <div className={`flash-message ${message.type}`}>
      {message.text}{" "}
      <button>
        <span onClick={rv} className="close">
          &times;
        </span>
      </button>
    </div>
  );
};

FlashMessage.defaultProps = {
  messages: "",
};

FlashMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default FlashMessage;
