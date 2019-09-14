import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class ContactUs extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Customer Service</h2>
            <img
              src="data:image/png;base64,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"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Us</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    someone@example.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ContactUs;
