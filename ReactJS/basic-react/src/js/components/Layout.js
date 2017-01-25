import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "Stephen", title: "Welcome"};
  }
  // getVal(firstname, lastname) {
  //   return firstname + " " + lastname;
  // }

  changeTitle(title) {
    this.setState({title}); //same thing as {title: title  }
  }
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}
