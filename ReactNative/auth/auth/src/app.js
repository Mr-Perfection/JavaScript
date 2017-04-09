import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBwNPjj7S0f-IBKyZJokJoFfg3P-2FBFPU',
      authDomain: 'auth-cf472.firebaseapp.com',
      databaseURL: 'https://auth-cf472.firebaseio.com',
      projectId: 'auth-cf472',
      storageBucket: 'auth-cf472.appspot.com',
      messagingSenderId: '759541189893'
    };
    
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;

    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          { this.renderContent() }
      </View>
    );
  }
}

export default App;
