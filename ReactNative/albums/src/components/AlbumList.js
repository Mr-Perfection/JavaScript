// import a library
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// create a component
// Album list class-based component
class AlbumList extends Component {
  // componentWillMount: any time right before rendering
  componentWillMount() {
    // console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
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
