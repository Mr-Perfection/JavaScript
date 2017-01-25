import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/");
    // this.props.history.replaceState(null, "/");
    console.log(this.props);
  }
  render() {
    const { location } = this.props;
    const { history } = this.props;
    console.log(history.isActive("archives"));
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>
        <Nav location={location} />
        <div class="container medium" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Stephenslee.net</h1>
              <Link to="archives" activeClassName="test"><button class="btn btn-primary">archives</button></Link>
              <Link to="settings"><button class="btn btn-success">settings</button></Link>
              <button onClick={this.navigate.bind(this)}>featured</button>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
