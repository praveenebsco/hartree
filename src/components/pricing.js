import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="products-grid">
          {/* BASIC */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.oftanasolutions.com/wp-content/uploads/2016/11/planspricing.png) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>

          {/* PLUS */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://colorlib.com/wp/wp-content/uploads/sites/2/free-pricing-table-plugins.jpg) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>

          {/* PREMIUM */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/134135/1160/772/m1/fpnw/wm0/pricing-.png?1403681808&s=9c267e614fd01ca9b73bb81fffae6795) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="products-grid">
          {/* BASIC */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/originals/99/74/de/9974de81985dd6483512a931434770c7.png) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>

          {/* PLUS */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/originals/b9/f5/66/b9f566c70994ed2665e0fcdd51fe4543.jpg) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>

          {/* PREMIUM */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.dribbble.com/users/946315/screenshots/4895662/pricing_illos.png) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="products-grid">
          {/* BASIC */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.dribbble.com/users/1175433/screenshots/4108494/isometrical-icons-dribble444.png) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>

          {/* PLUS */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.dribbble.com/users/135634/screenshots/3220284/pricing800.jpg) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>

          {/* PREMIUM */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://image.freepik.com/free-vector/template-modal-pricing-ui_37940-12.jpg) center / cover"
              }}
            />
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions className="products-action" border>
              <Button colored>Get Started</Button>
              <Button colored>Free Trial</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Product 1</Tab>
          <Tab>Product 2</Tab>
          <Tab>Product 3</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Pricing;
