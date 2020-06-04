import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-calendar/dist/Calendar.css';
import '../styles/tablets/book.scss';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bookAppointment } from '../store/actions/appointments';

const BookAppointment = ({ bookAppointment, userid }) => {
  const [info, setInfo] = useState('');
  const [link] = useState('https://microverse.zoom.us/j/3749659607');
  const [guest, setGuest] = useState('');
  const [date, setDate] = useState(new Date());
  const { doctorid } = useParams();
  const { state } = useLocation();
  return (
    <div className="book-container">
      <h3>
        Book an appointment with Dr.
        {state.name}
      </h3>
      <form onSubmit={e => {
        e.preventDefault();
        bookAppointment({
          info,
          meeting_link: link,
          guest,
          date,
          doctor_id: doctorid,
          user_id: userid,
        });
      }}
      >
        <div>
          <label>Meeting information</label>
          <textarea
            value={info}
            onChange={e => setInfo(e.target.value)}
          />
        </div>
        <div>
          <label>Meeting link</label>
          <input value={link} readOnly />
        </div>
        <div>
          <label>Guest</label>
          <input value={guest} onChange={e => setGuest(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <DateTimePicker onChange={setDate} value={date} />
        </div>
        <div>
          <div> </div>
          <button type="submit">Book</button>
        </div>
      </form>
    </div>
  );
};

BookAppointment.defaultProps = {
  bookAppointment: () => undefined,
  userid: null,
};
BookAppointment.propTypes = {
  bookAppointment: PropTypes.func,
  userid: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  bookAppointment: data => dispatch(bookAppointment(data)),
});
const mapStateToProps = state => ({
  userid: state.auth.user.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);
