import React from 'react';
import Routes from '../router/index';
import { useRouteMatch, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
function App() {
  const {pathname}= useLocation()
  return (
    <div className="main-container">
    <div style={pathname==='/' ? {display:"none"} :{display:"block"}} >
      <Navbar/>
    </div>
      {Routes}
    </div>
  );
}

export default App;
