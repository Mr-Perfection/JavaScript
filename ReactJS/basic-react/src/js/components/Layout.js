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
  constructor() {
    super();
    this.state = {name: "Stephen", title: "Welcome"};
  }
  // getVal(firstname, lastname) {
  //   return firstname + " " + lastname;
  // }
  render() {
    const title = "Welcome Stephen!";
    let list = [
      <Header title={title}/>,
      <Header/>,
      <Header/>
    ]; //use {list}
    setTimeout(
      () => {
        this.setState({title: "Welcome , John"});
      }, 3000)
    return (
      <div>
        <Header title={title}/>
        <Header title={this.state.title}/>
        {this.state.name}
        <Footer />
      </div>
    );
  }
}
