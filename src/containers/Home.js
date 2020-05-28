import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import '../styles/tablets/home.scss';
import Appointments from "./Appointments";
import { connect } from "react-redux";

const Home = ({isLoggedIn}) => {
  const { url, path } = useRouteMatch();
  console.log(url, path);
  if (!isLoggedIn) return <Redirect to='/login'/>
  return (
    <div>
      <>
        <div>
          <div className="menu">
            <ul>
              <li>
                <Link to={`${url}/appointments`}>Appointments</Link>
              </li>
              <li>
                <Link to={`${url}/favourites`}>Favourites</Link>
              </li>
            </ul>
          </div>
          <div className="welcome">
            <h1>Welcome back, Name</h1>
          </div>
        </div>
        <Switch>
          <Route path={`${path}/appointments`}>
            <Appointments />
          </Route>
        </Switch>
      </>
    </div>
  );
};


const mapStateToProps = (state)=>{
  console.log(state)
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}
export default connect(mapStateToProps,null)(Home);
