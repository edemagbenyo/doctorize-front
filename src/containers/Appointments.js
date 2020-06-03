import React, { useEffect } from "react";
import "../styles/tablets/appointments.scss";
import { connect } from "react-redux";
import { getAppointments } from "../store/actions/appointments";
import moment from 'moment';

const Appointments = ({appointments,getAppointments}) => {
  useEffect(()=>{
    getAppointments()
  },[getAppointments])
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Dr.</th>
            <th>Meeting link</th>
          </tr>
        </thead>
        <tbody>
          {(appointments && appointments.length>0) ? (
            appointments.map((app) => (
              <tr key={app.id}>
                <td>{`${app.date}/${moment(app.time).format('h:m')}`}</td>
                <td>{app.doctor.name}</td>
                <td>{app.meeting_link}</td>
              </tr>
            ))
          ) : (
            <tr>No Appointment!!!</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    appointments: state.appointments.appointments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAppointments: () => dispatch(getAppointments()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
