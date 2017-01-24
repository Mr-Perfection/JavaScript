import React from "react";

import Footer from "./Footer";
import Header from "./Header";

// export default class Layout extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "You are awesome!",
//     };
//   }
//
//   changeTitle(title) {
//     this.setState({title});
//   }
//
//   render() {
//     return (
//       <div>
//         <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
//         <Footer />
//       </div>
//     );
//   }
// }

export default class Layout extends React.Component {
  // constructor() {
  //   super();
  //   this.name = "Stephen";
  // }
  // getVal(firstname, lastname) {
  //   return firstname + " " + lastname;
  // }
  render() {
    // const name = "Stephen Lee";
    let list = [
      <Header/>,
      <Header/>,
      <Header/>
    ]; //use {list}

    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
