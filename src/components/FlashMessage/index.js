import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FlashMessage = ({ message, onRemoveFlash }) => {
  const rv = () => {
    onRemoveFlash(message.id);
  };
  useEffect(() => {
    setTimeout(() => {
      // Remove
      rv();
    }, 2000);
  });
  return (
    <div className={`flash-message ${message.type}`}>
      {message.text}
      {' '}
      <button type="button" onClick={rv}>
        <span className="close">
          &times;
        </span>
      </button>
    </div>
  );
};

FlashMessage.defaultProps = {
  message: {},
  onRemoveFlash: () => undefined,
};

FlashMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
  }),
  onRemoveFlash: PropTypes.func,
};

export default FlashMessage;
