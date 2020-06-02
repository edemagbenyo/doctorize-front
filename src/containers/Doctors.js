import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getDoctors,
  getDoctorsBySpeciality,
} from "../store/actions/doctors";
import "../styles/tablets/doctors.scss";
import Doctor from "../components/Doctor";
import { useParams, Redirect } from "react-router-dom";
import Loading from "../components/Loading";

const Doctors = ({ doctors, getDoctors, isLoading,getDoctorsBySpeciality,speciality,isLoggedIn }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDoctorsBySpeciality(id);
    } else {
      getDoctors();
    }
  },[getDoctors,id]);
  if (!isLoggedIn) return <Redirect to="/login" />;
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>Doctors</h1>
      {speciality && (<h2>{speciality.name}</h2>)}
      <span className="info">Select any doctor to book an appointment</span>
      {doctors && doctors.length > 0 ? (
        <ul className="doctors">
          {doctors.map((doctor) => (
            <Doctor
              key={doctor.id}
              doctor={doctor}
              
            />
          ))}
        </ul>
      ) : (
        <h5>No Doctor</h5>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    doctors: state.doctors.doctors,
    isLoading: state.doctors.isLoading,
    speciality:state.doctors.speciality,
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDoctors: () => dispatch(getDoctors()),
    getDoctorsBySpeciality: (speciality_id) =>
       dispatch(getDoctorsBySpeciality(speciality_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
