import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
