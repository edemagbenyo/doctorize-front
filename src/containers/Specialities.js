import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSpecialities } from '../store/actions/specialities';
import Loading from '../components/Loading';
import '../styles/tablets/specialities.scss'
import Speciality from '../components/Speciality';


const Specialities = ({specialities,getSpecialities,isLoading})=>{
  useEffect(()=>{
    getSpecialities()
  },[getSpecialities])

  if(isLoading) return <Loading/>
  return <div>
    <h1>Specialities</h1>
    <span className="info">Select any speciality to get doctors</span>
    {(specialities && specialities.length>0) ? (<ul className="specialities">
      {specialities.map(speciality=>(<Speciality speciality = {speciality} getDoctors={()=>console.log("whoolaa!!!")}/>))}
    </ul>) : (<h5>No speciality</h5>)}
  </div>
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    specialities: state.specialities.specialities,
    isLoading: state.specialities.isLoading
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getSpecialities:()=>dispatch(getSpecialities())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Specialities);