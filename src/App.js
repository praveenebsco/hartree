import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

import Main from "./components/main";


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title=" " scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contactus">Contact Us</Link>
            </Navigation>
          </Header>
          <Drawer title=" ">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contactus">Contact Us</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
