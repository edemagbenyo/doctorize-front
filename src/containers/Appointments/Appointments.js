import React, { useEffect } from "react";
import "./Appointments.scss";
import { connect } from "react-redux";
import moment from "moment";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { getAppointments } from "../../store/actions/appointments";

const Appointments = ({ appointments, getAppointments }) => {
  useEffect(() => {
    getAppointments();
  }, [getAppointments]);
  console.log(appointments);
  const userType = Cookies.get("userType");
  return (
    <div className="container-appointments">
      <table>
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>{userType === "doctor" ? "Patient" : "Dr."}</th>
            <th>Meeting link</th>
          </tr>
        </thead>
        <tbody>
          {appointments && appointments.length > 0 ? (
            appointments.map((app) => (
              <tr key={app.id}>
                <td>{`${app.date}/${moment(app.time).format("h:m")}`}</td>
                <td>
                  {userType === "doctor" ? app.user.name : app.doctor.name}
                </td>
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

Appointments.defaultProps = {
  appointments: [],
  getAppointments: () => undefined,
};

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      meeting_link: PropTypes.string,
      doctor: PropTypes.shape({
        name: PropTypes.string,
      }),
    })
  ),
  getAppointments: PropTypes.func,
};

const mapStateToProps = (state) => ({
  appointments: state.appointments.appointments,
  user_type: state.auth.user_type,
});
const mapDispatchToProps = (dispatch) => ({
  getAppointments: () => dispatch(getAppointments()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
