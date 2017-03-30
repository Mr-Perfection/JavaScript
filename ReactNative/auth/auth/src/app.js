import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBwNPjj7S0f-IBKyZJokJoFfg3P-2FBFPU',
      authDomain: 'auth-cf472.firebaseapp.com',
      databaseURL: 'https://auth-cf472.firebaseio.com',
      storageBucket: 'auth-cf472.appspot.com',
      messagingSenderId: '759541189893'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
