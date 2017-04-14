// render list of data to users
import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}
// this func takes global state object and maps state object to props
const mapStateToProps = state => {
  // console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
