import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from '../containers/Welcome';
export default (
  <Switch>
    <Route path="/"><Welcome/></Route>
  </Switch>
);
