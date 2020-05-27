import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from '../containers/Welcome';
export default (
  <Switch>
    <Route path="/"><Welcome/></Route>
  </Switch>
);
