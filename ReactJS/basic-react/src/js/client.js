import React from "react";
import ReactDOM from "react-dom";
// import Layout from "./components/Layout";

class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Stephen";
  }
  getVal(firstname, lastname) {
    return firstname + " " + lastname;
  }
  render() {
    // const name = "Stephen Lee";
    return (
      <div>
        <h1>it is working!!!!{this.getVal("Stephen", "Lee")}</h1>
        <h1>it is working!!!!{this.name}</h1>
        <h1>playing around: weehoo!</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
