import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "./loginPage";
import LandingPage from "./landingPage";
import ContactUs from "./contactUs";
import Pricing from "./pricing";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/contactus" component={ContactUs} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/pricing" component={Pricing} />
  </Switch>
);

export default Main;
