import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./login";
import LandingPage from "./landingPage";
import ContactUs from "./contactUs";
import Faq from "./faq";
import Pricing from "./pricing";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/contactus" component={ContactUs} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/faq" component={Faq} />
    <Route exact path="/pricing" component={Pricing} />
  </Switch>
);

export default Main;
