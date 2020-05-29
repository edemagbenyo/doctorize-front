import React, { useEffect } from "react";
import Routes from "../router/index";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/tablets/main.scss";
import { connect } from "react-redux";
import { getUser } from "../store/actions/auth";
function App({getUser, user}) {
  
  const { pathname } = useLocation();
  useEffect(()=>{
   getUser()
  },[getUser]);
  return (
    <div className="main-container">
      <div
        className={pathname === "/" ? "" : "main-navbar"}
        style={pathname === "/" ? { display: "none" } : { display: "" }}
      >
        <Navbar user={user}/>
      </div>
      <div
        style={pathname === "/" ? { width: "100%" } : { width: "" }}
        className="main-content"
      >
        {Routes}
      </div>
    </div>
  );
}

const mapDispatchTopProps = (dispatch) => {
  return { getUser: () => dispatch(getUser()) };
};
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps,mapDispatchTopProps)(App);
