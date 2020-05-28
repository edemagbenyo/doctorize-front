import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from '../containers/Welcome';
import Login from '../containers/Login';
export default (
  <Switch>
    <Route path="/login"><Login/></Route>
    <Route path="/"><Welcome/></Route>
  </Switch>
);
