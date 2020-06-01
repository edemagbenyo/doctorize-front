import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDoctors, bookAppointment } from '../store/actions/doctors';
import '../styles/tablets/doctors.scss'
import Doctor from '../components/Doctor';

const Doctors = ({doctors,getDoctors})=>{
  useEffect(()=>{
    getDoctors()
  },[])
  return <div>
    <h1>Doctors</h1>
    <span className="info">Select any doctor to book an appointment</span>
    {(doctors && doctors.length>0) ? (<ul className="doctors">
      {doctors.map(doctor=>(<Doctor key={doctor.id} doctor = {doctor} bookAppointment={()=>console.log("whoolaa!!!")}/>))}
    </ul>) : (<h5>No Doctor</h5>)}
  </div>
}


const mapStateToProps = state=>{
  return{
    doctors:state.doctors.doctors
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    getDoctors:()=>dispatch(getDoctors()),
    bookAppointment: (doctor_id)=>dispatch(bookAppointment(doctor_id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Doctors);