// Index.ios.js - place code in here for IOS!!

// Import a library to help create a component
//
import React from 'react';
// Do import destructuring (import only things you need)
// import ReactNative from 'react-native';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// Create a component
const App = () => (
  //  Nesting some content in Text
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
/*
  Register at least one component
  @param string, project name
  @param function,  component
*/
AppRegistry.registerComponent('albums', () => App);
