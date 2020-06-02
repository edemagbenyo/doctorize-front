import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-calendar/dist/Calendar.css";
import "../styles/tablets/book.scss";
import {connect} from 'react-redux';
import { bookAppointment } from "../store/actions/appointments";
import PropTypes from 'prop-types';

const BookAppointment = ({bookAppointment}) => {
  const [info, setInfo] = useState("");
  const [link, setLink] = useState("");
  const [guest, setGuest] = useState("");
  const [date, setDate] = useState(new Date());
  return (
    <div className="book-container">
      <h3>Book an appointment with Dr. .....</h3>
      <form onSubmit={(e)=>{
        e.preventDefault();
        bookAppointment({
          info,
          link,
          guest,
          date
        })
      }}>
        <div>
          <label>Meeting information</label>
          <textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Meeting link</label>
          <input value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div>
          <label>Guest</label>
          <input value={guest} onChange={(e) => setGuest(e.target.value)} />
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

BookAppointment.defaultProps={
  bookAppointment:()=>undefined
}
BookAppointment.propTypes={
  bookAppointment:PropTypes.func
}

const mapDispatchToProps = dispatch =>{
  return {
    bookAppointment:(data)=>dispatch(bookAppointment(data))
  }
}

export default connect(null,mapDispatchToProps)(BookAppointment);
