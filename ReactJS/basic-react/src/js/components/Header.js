import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  // handleChange(e) {
  //   const title = e.target.value;
  //   this.props.changeTitle(title);
  // }

  render() {
    console.log(this.props.title);
    return (
      <div>
        <Title title={this.props.title}/>
      </div>
      // <div>
      //   <Title title={this.props.title} />
      //   <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      // </div>

    );
  }
}
