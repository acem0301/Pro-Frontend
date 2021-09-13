import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "views/HomePage/HomePage";
import LoginPage from "views/LoginPage/LoginPage";
import Dashboard from "views/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  );
}
