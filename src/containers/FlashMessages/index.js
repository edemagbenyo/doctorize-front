import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlashMessage from '../../components/FlashMessage';
import { removeFlashMessage } from '../../store/actions/flashMessages';
import './styles.scss';

const FlashMessages = ({ messages, removeFlashMessage }) => messages
  && messages.map(message => (
    <FlashMessage
      key={message.id}
      message={message}
      onRemoveFlash={removeFlashMessage}
    />
  ));
FlashMessages.defaultProps = {
  messages: '',
};

FlashMessages.propTypes = {
  messages: PropTypes.arrayOf({
    text: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
  }),
};
const mapStateToProps = state => ({
  messages: state.flashMessages,
});
export default connect(mapStateToProps, { removeFlashMessage })(FlashMessages);
