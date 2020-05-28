import React from "react";
import Routes from "../router/index";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/tablets/main.scss";
function App() {
  const { pathname } = useLocation();
  return (
    <div className="main-container">
      <div
        className={pathname === "/" ? "" : "main-navbar"}
        style={pathname === "/" ? { display: "none" } : { display: "" }}
      >
        <Navbar />
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

export default App;
