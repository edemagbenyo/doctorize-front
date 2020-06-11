import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';
import { useParams, useLocation, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bookAppointment } from '../../store/actions/appointments';
import './styles.scss';

const BookAppointment = ({ bookAppointment, userid, isLoading, isDone }) => {
  const [info, setInfo] = useState('');
  const [link] = useState('https://microverse.zoom.us/j/3749659607');
  const [guest, setGuest] = useState('n/a');
  const [date, setDate] = useState(new Date());
  const { doctorid } = useParams();
  const { state } = useLocation();
  if (isDone) return <Redirect to='/home/appointments' />
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
          <label htmlFor="info">Meeting information</label>
          <textarea
            id="info"
            value={info}
            onChange={e => setInfo(e.target.value)}
            required={true}
          />
        </div>
        <div>
          <label htmlFor="link">Meeting link</label>
          <input id="link" value={link} readOnly />
        </div>
        <div>
          <label htmlFor="guest">Guest</label>
          <input id="guest" value={guest} onChange={e => setGuest(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <DateTimePicker id="date" onChange={setDate} value={date} />
        </div>
        <div>
          <div> </div>
          <button type="submit" readOnly >{isLoading ? 'Loading...':'Book Appointment'}</button>
        </div>
      </form>
    </div>
  );
};

BookAppointment.defaultProps = {
  bookAppointment: () => undefined,
  userid: null,
  isLoading: false,
  isDone: false
};
BookAppointment.propTypes = {
  bookAppointment: PropTypes.func,
  userid: PropTypes.number,
  isLoading: PropTypes.bool,
  isDone: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
  bookAppointment: data => dispatch(bookAppointment(data)),

});
const mapStateToProps = state => ({
  userid: state.auth.user.id,
  isLoading: state.appointments.isLoading,
  isDone: state.appointments.isDone,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);
