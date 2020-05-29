import React from 'react';
import { connect } from 'react-redux';


const Specialities = ()=>{
  return <div>
    <h1>Specialities</h1>
  </div>
}

const mapStateToProps = (state)=>{
  return {
    specialities: state.specialities
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getSpecialities:()=>dispatch()
  }
}


export default connect(null, null)(Specialities);