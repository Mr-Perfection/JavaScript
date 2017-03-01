// import a library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create a component
// Album list class-based component
class AlbumList extends Component {
  // componentWillMount: any time right before rendering
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
  }
  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

// export the component to be used
export default AlbumList;
