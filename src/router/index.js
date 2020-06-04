import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from '../containers/Welcome';
import Login from '../containers/Login';
import Register from "../containers/Register";
import Home from "../containers/Home";
import Doctors from "../containers/Doctors";
import Specialities from "../containers/Specialities";
import RegisterDoctor from "../containers/RegisterDoctor";
export default (
  <Switch>
    <Route path="/login"><Login/></Route>
    <Route path="/register"><Register/></Route>
    <Route path="/registerdoc"><RegisterDoctor/></Route>
    <Route path="/specialities/:id/doctors"><Doctors/></Route>
    <Route path="/specialities"><Specialities/></Route>
    <Route path="/home"><Home/></Route>
    <Route path="/doctors"><Doctors/></Route>
    <Route path="/"><Welcome/></Route>
  </Switch>
);

