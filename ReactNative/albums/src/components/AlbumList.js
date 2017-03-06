// import a library
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// create a component
// Album list class-based component
class AlbumList extends Component {
  // initializations
  // state has empty albums array
  state = { albums: [] };

  // componentWillMount: any time right before rendering
  componentWillMount() {
    // console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }
  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

// export the component to be used
export default AlbumList;
