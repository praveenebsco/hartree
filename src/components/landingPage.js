import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://landerapp.com/blog/wp-content/uploads/2018/02/1.png"
              alt="landing page"
              className="landing-img"
            />
            <div className="banner-text">
              <h1>Hartree</h1>
              <hr />
              <p>
                The hartree, also known as the Hartree energy, is the unit of
                energy in the Hartree atomic units system, named after the
                British physicist Douglas Hartree. It is defined as 2R∞hc, where
                R∞ is the Rydberg constant, h is the Planck constant and c is
                the speed of light.
              </p>
              <div className="social-links">
                
                { /* Linkedin */ }
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                { /* Facebook */ }
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                { /* Twitter */ }
                <a
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                
                { /* Youtube */ }
                <a
                  href="http://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
